const router = require("express").Router();
require("dotenv").config();
const db = require("../models");
const { Op } = require("sequelize");

router.post("/add", async (req, res, next) => {
  try {
    const tomorrow = Date.now() + 60 * 60 * 24 * 1000;
    const { stock, discount, ShopId, ProductId, dueDate } = req.body;
    const newStock = await db.Stock.create({
      stock,
      ShopId,
      ProductId,
      discount: discount * 0.01,
      dueDate: dueDate ? dueDate : new Date(tomorrow),
    });
    const stockData = await db.Stock.findOne({
      where: { id: newStock.id },
      include: [
        {
          model: db.Product,
          include: [{ model: db.Image }],
        },
      ],
    });
    return res.status(200).json({ stockData });
  } catch (err) {
    console.error(err.response);
    return next(err);
  }
});

router.post("/load", async (req, res, next) => {
  try {
    const products = await db.Stock.findAll({
      where: {
        [Op.and]: [{ ShopId: req.body.ShopId }, { dueDate: { [Op.gte]: new Date() } }],
      },
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
      order: [["id", "DESC"]],
    });

    const categories = await db.Category.findAll({ where: { ShopId: req.body.ShopId } });

    const result = { products, categories };

    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/edit", async (req, res, next) => {
  try {
    const { id, stock, discount } = req.body;
    await db.Stock.update({ stock, discount }, { where: { id } });
  } catch (err) {
    console.error(err.response.data);
    return next(err);
  }
});

module.exports = router;
