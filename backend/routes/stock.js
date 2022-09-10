const router = require("express").Router();
require("dotenv").config();
const db = require("../models");
const CoordinateModel = require("../mongoModels/coordinates");
const { Op } = require("sequelize");
const moment = require("moment");

router.post("/", async (req, res, next) => {
  try {
    let x;
    let y;

    if (req.body) {
      let user;
      if (req.body.coordinates) {
        y = req.body.coordinates.lat;
        x = req.body.coordinates.lng;
      }

      if (req.body.id) {
        user = await db.User.findOne({
          where: { id: req.body.id },
        });
        x = user.lat;
        y = user.lng;
      }

      const shopCoordinates = await CoordinateModel.find({
        location: {
          $near: {
            $geometry: { type: "Point", coordinates: [y, x] },
            $maxDistance: 1000,
          },
        },
      });

      const ShopIds = [];

      await shopCoordinates.map((v) =>
        ShopIds.push({
          ShopId: v.ShopId,
        }),
      );

      const stocks = await db.Stock.findAll({
        where: { [Op.and]: [{ [Op.or]: ShopIds }, { dueDate: { [Op.gte]: new Date() } }] },
        include: [
          {
            model: db.Product,
            include: [
              { model: db.Image },
              { model: db.Shop, attributes: ["id", "name"] },
              { model: db.Comment },
              { model: db.Rating, attributes: ["rate"] },
              { model: db.Category, attributes: ["id", "name"] },
            ],
          },
        ],
      });

      return res.status(200).json({ shopCoordinates, stocks });
    } else if (req.body === "undefined") {
      return res.status(200).json([]);
    }
  } catch (err) {
    console.error(err);
    return next();
  }
});

// router.post("/add", async (req, res, next) => {
//   try {
//     let newStock;
//     const today = moment().toArray().slice(0, 3);
//     const tomorrow = moment([...today.slice(0, 2), today[2] + 1]);

//     const { stock, discount, ShopId, ProductId, dueDate } = req.body;
//     const isExisting = await db.Stock.findOne({
//       where: {
//         [Op.and]: [
//           { ShopId },
//           {
//             createdAt: {
//               [Op.between]: [moment(today), tomorrow],
//             },
//           },
//         ],
//       },
//     });
//     if (isExisting) {
//       newStock = await db.Stock.update(
//         { stock: isExisting.stock + stock, discount },
//         { where: { id: isExisting.id } },
//       );
//     } else {
//       newStock = await db.Stock.create({
//         stock,
//         ShopId,
//         ProductId,
//         discount: discount * 0.01,
//         dueDate: dueDate ? dueDate : tomorrow,
//       });
//     }

//     const stockData = await db.Stock.findOne({
//       where: { id: isExisting ? isExisting.id : newStock.id },
//       include: [
//         {
//           model: db.Product,
//           include: [
//             { model: db.Image },
//             { model: db.Shop, attributes: ["id", "name"] },
//             { model: db.Comment },
//             { model: db.Rating, attributes: ["rate"] },
//             { model: db.Category, attributes: ["id", "name"] },
//           ],
//         },
//       ],
//     });
//     return res.status(200).json({ stockData });
//   } catch (err) {
//     console.error(err.response);
//     return next(err);
//   }
// });

router.post("/load", async (req, res, next) => {
  try {
    const stocks = await db.Stock.findAll({
      where: {
        [Op.and]: [{ ShopId: req.body.ShopId }, { dueDate: { [Op.gte]: new Date() } }],
      },
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
      order: [["id", "DESC"]],
    });

    const categories = await db.Category.findAll({ where: { ShopId: req.body.ShopId } });

    const result = { stocks, categories };

    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
