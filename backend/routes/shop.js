const express = require("express");
const router = express.Router();
const db = require("../models");
const axios = require("axios");
require("dotenv").config();

router.post("/signin", async (req, res, next) => {
  try {
    const data = await axios.get(
      `http://api.vworld.kr/req/address?service=address&request=getCoord&key=${process.env.VWORLD_API_KEY}&version=2.0&simple=true&address=${req.body.address}&crs=epsg:432&format=json`
    );
    const {
      response: {
        result: { point },
      },
    } = data;
    const store = await db.Store.create({
      name: req.body.name,
      bizcode: req.body.bizcode,
      address: req.body.address,
      address_detail: req.body.address_detail,
      lnt: point.x,
      lng: point.y,
    });
    const user = await db.User.findOne({ where: { id: req.user.id } });
    await user.addStore(store.id);
    return res.status(200).json(store);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/detail", async (req, res, next) => {
  try {
    const store = await db.Store.findOne({
      where: { id: req.params.id },
      include: [{ model: db.Produdct, include: [{ model: db.Image }] }],
      attributes: ["name", "bizcode", "address", "address_detail"],
    });
    res.status(200).json(store);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/edit", async (req, res, next) => {
  const { name, address, address_detail } = req.body;
  const data = await axios.get(
    `http://api.vworld.kr/req/address?service=address&request=getCoord&key=${process.env.VWORLD_API_KEY}&version=2.0&simple=true&address=${req.body.address}&crs=epsg:432&format=json`
  );
  const {
    response: {
      result: { point },
    },
  } = data;
  try {
    const result = await db.Store.update({
      name,
      address,
      address_detail,
      lnt: point.x,
      lng: point.y,
    });
    const store = db.Store.findOne({
      where: { id: result.id },
      include: [{ model: db.Product, as: "products", include: [{ model: db.Image }] }],
    });
    return res.status(200).json(store);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
