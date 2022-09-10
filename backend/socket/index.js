const SocketIo = require("socket.io");
const moment = require("moment");
const db = require("../models");
const Op = require("sequelize").Op;

module.exports = (server, app) => {
  const io = SocketIo(server, { cors: { origin: true } });

  io.on("connection", (socket) => {
    socket.emit("connection", { socketId: socket.id });

    socket.on("client:id", ({ id }) => {
      const ShopId = Number(id);
      socket.join(ShopId);
      return io.sockets.to(ShopId).emit("server:id", "you just joined " + id);
    });

    app.post("/stock/add", async (req, res, next) => {
      try {
        let newStock;
        const today = moment().toArray().slice(0, 3);
        const tomorrow = moment([...today.slice(0, 2), today[2] + 1]);

        const { stock, discount, ShopId, ProductId, dueDate } = req.body;
        const isExisting = await db.Stock.findOne({
          where: {
            [Op.and]: [
              { ShopId },
              { ProductId },
              {
                createdAt: {
                  [Op.between]: [moment(today), tomorrow],
                },
              },
            ],
          },
        });
        if (isExisting) {
          newStock = await db.Stock.update(
            { stock: isExisting.stock + stock, discount },
            { where: { id: isExisting.id } },
          );
        } else {
          newStock = await db.Stock.create({
            stock,
            ShopId,
            ProductId,
            discount,
            dueDate: dueDate ? dueDate : tomorrow,
          });
        }

        const result = await db.Stock.findOne({
          where: { id: isExisting ? isExisting.id : newStock.id },
          include: [
            { model: db.Shop, attributes: ["id", "name"] },
            {
              model: db.Product,
              include: [
                { model: db.Image },
                { model: db.Comment },
                { model: db.Rating, attributes: ["rate"] },
                { model: db.Category, attributes: ["id", "name"] },
              ],
            },
          ],
        });

        console.log(typeof ShopId, ShopId);

        res.status(200).json(result);
        io.sockets.to(ShopId).emit("server:add", result);
      } catch (err) {
        console.error(err.response);
        return next(err);
      }
    });

    app.post("/stock/sold", async (req, res, next) => {
      try {
        console.log(id);
        const { id, quantity, ShopId } = req.body;
        // console.log(id);
        const stock = await db.Stock.findOne({ where: { id } });

        const reducedStock = stock.stock - quantity;
        if (reducedStock < 0) {
          res.status(401).json({ error: true, message: "재고가 부족합니다." });
          return io.sockets
            .to(ShopId)
            .emit("server:sold:error", { error: true, message: "재고가 부족합니다." });
        }
        await db.Stock.update({ stock: reducedStock }, { where: { id } });
        const updatedStock = await db.Stock.findOne({ where: { id } });
        if (updatedStock.stock === 0) {
          await db.Stock.destroy({ where: { id } });
        }

        res.status(200).json(updatedStock);
        return io.sockets.to(ShopId).emit("server:sold", updatedStock);
      } catch (err) {
        console.error(err);
        return next(err);
      }
    });

    app.post("/stock/cart", async (req, res, next) => {
      try {
        res.status(200).send("success");
        return io.sockets.to(0).emit("server:cart:sold", req.body);
      } catch (err) {
        console.error(err.response.data);
        return next(err);
      }
    });

    app.post("/stock/update", async (req, res, next) => {
      try {
        const { id, discount, ShopId, stock } = req.body;
        await db.Stock.update({ stock, discount }, { where: { id } });
        const updatedStock = await db.Stock.findOne({ where: { id } });
        console.log(updatedStock);
        if (updatedStock.stock === 0) {
          await db.Stock.destroy({ where: { id } });
        }
        res.status(200).json(updatedStock);
        return io.sockets.to(ShopId).emit("server:update", updatedStock);
      } catch (err) {
        console.error(err);
        return next(err);
      }
    });

    socket.on("disconnect", (socket) => {
      console.log(socket.id);
      console.log("socket disconnected");
    });
  });
};
