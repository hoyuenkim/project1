const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');
require('dotenv').config();

router.post('/detail', async (req, res, next) => {
  try {
    const store = await db.Store.findOne({
      where: { id: req.body.id },
      include: [
        {
          model: db.Product,
          include: [
            { model: db.Image, attributes: ['url'] },
            {
              models: db.Category,
              attributes: ['name', 'id'],
            },
            { models: db.Discount, attributes: ['rate'] },
          ],
        },
      ],
      attributes: ['name', 'address', 'addressDetail', 'lat', 'lng'],
    });
    return res.status(200).json(store);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post('/edit', async (req, res, next) => {
  const { idn, name, address, address_detail } = req.body;
  const data = await axios.get(
    `http://api.vworld.kr/req/address?service=address&request=getCoord&key=${process.env.VWORLD_API_KEY}&version=2.0&simple=true&address=${req.body.address}&crs=epsg:432&format=json`
  );
  const {
    response: {
      result: { point },
    },
  } = data;
  try {
    const result = await db.Store.update(
      {
        name,
        address,
        address_detail,
        lnt: point.x,
        lng: point.y,
      },
      { where: { id } }
    );
    const store = db.Store.findOne({
      where: { id: result.id },
      include: [
        {
          model: db.Product,
          include: [
            { model: db.Image, attributes: ['url'] },
            { model: db.Category, attributes: ['name', 'id'] },
            { model: db.Discount, attributes: ['rate'] },
          ],
        },
      ],
    });
    return res.status(200).json(store);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
