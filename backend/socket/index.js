const SocketIo = require("socket.io");

module.exports = (server, app) => {
  const io = SocketIo(server, { cors: { origin: true } });

  // const menu = io.of("/menu");

  io.on("connection", (socket) => {
    socket.emit("connection", { socketId: socket.id });

    socket.on("client:id", ({ id }) => {
      socket.join(id);
      console.log(Object.keys(io.sockets.sockets));
      io.sockets.to(id).emit("server:id", "joined " + id);
    });

    app.post("/stock/sold", async (req, res, next) => {
      try {
        const { id, quantity } = req.body;
        const stock = await db.Stock.findOne({ where: { id } });
        const reducedQuantity = stock.quantity - quantity;
        await db.Stock.update({ quantity: reducedQuantity }, { where: { id } });
        const updatedStock = await db.Stock.findOne({
          where: { id },
          include: [
            {
              model: db.Product,
              include: [{ model: db.Image }],
            },
          ],
        });
        io.sockets.to(id).emit(updatedStock);
        return res.status(200).json(updatedStock);
      } catch (err) {
        console.error(err);
        return next(err);
      }
    });

    app.post("/update", async (req, res, next) => {
      try {
        const { id, quantity } = req.body;
        await db.Stock.update({ quantity }, { where: { id } });
        const updatedStock = await db.Stock.findOne({
          where: { id },
          include: [
            {
              model: db.Product,
              include: [{ model: db.Image }],
            },
          ],
        });
        return res.status(200).json(updatedStock);
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
