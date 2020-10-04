const router = require("express").Router();
const db = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const menus = await db.Product.findAll({
      where: {},
      // where: { shopId: req.params.shopId },
      include: [
        { model: db.Discount },
        { model: db.Image, attributes: ["url"] },
        { model: db.Comment },
      ],
      attributes: ["id", "title", "description", "price", "quantity"],
    });
    // Object.assign({ tableId: req.params.tableId }, menus);
    return res.status(200).json(menus);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
