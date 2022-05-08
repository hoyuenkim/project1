const router = require("express").Router();
require("dotenv").config();
const db = require("../models");

router.post("/add", async (req, res, next) => {
  try {
    const tomorrow = Date.now() + 60 * 60 * 24 * 1000;
    const { quantity, discount, ShopId, ProductId, dueDate } = req.body;
    const newStock = await db.Stock.create({
      quantity,
      ShopId,
      ProductId,
      discount,
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
    return res.status(200).send({ stockData });
  } catch (err) {
    console.err(err);
    return next(err);
  }
});

router.post("/sold", async (req, res, next) => {
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
    return res.status(200).json(updatedStock);
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

router.post("/update", async (req, res, next) => {
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

module.exports = router;
