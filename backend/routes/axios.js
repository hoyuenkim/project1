const axios = require("axios");
const express = require("express");
const router = express.Router();
const axios = require("axios");
const LikeModel = require("./modles/LikeModel");

router.post("/like", (req, res, next) => {
  try {
    const flag = req.body.data.flag;
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
