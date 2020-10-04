const express = require("express");
const router = express.Router();
const db = require("../models");
const axios = require("axios");
const multer = require("multer");
const path = require("path");

const uploadDir = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, `product_${Date.now()}.${file.mimetype.split("/")[1]}`);
  },
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },
});

const upload = multer({ storage });

router.post("/add", upload.array("files"), async (req, res, next) => {
  try {
    const product = await db.Product.create({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });
    const images = await Promise.all(
      req.files.map((file) => {
        return db.Image.create({ url: file.filename });
      })
    );
    await product.addImages(images);
    return res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/edit/:id", upload.none(), async (req, res, next) => {
  try {
    await db.Product.update({ title, price, description }, { where: { id: req.body.id } });
    const product = db.Product.findOne({ where: { id: req.body.id } });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
