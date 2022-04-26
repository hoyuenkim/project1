const router = require('express').Router();
const db = require('../models');

router.post('/', async (req, res, next) => {
  try {
    const { ShopId, TableId } = req.body.data;

    const menus = await db.Product.findAll({
      where: { ShopId },
      include: [
        { model: db.Shop, attributes: ['id', 'name'] },
        { model: db.Discount, attributes: ['id', 'rate'] },
        { model: db.Image, attributes: ['url'] },
        { model: db.Comment },
        { model: db.Category, attributes: ['id', 'name'] },
      ],
      attributes: ['id', 'title', 'description', 'price', 'quantity'],
    });
    const data = TableId ? { menus, TableId } : menus;
    const categories = await db.Category.findAll({ where: { ShopId } });
    const result = [data, categories];
    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
