const express = require("express");
const router = express.Router();
const db = require("../models");
const multer = require("multer");
const path = require("path");
const passport = require("passport");
const bcrypt = require("bcrypt");

const uploadDir = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
  destination(req, file, done) {
    done(null, uploadDir);
  },
  filename(req, file, done) {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    done(null, basename + new Date().valueOf() + ext);
  },
});

const upload = multer({ storage, limit: { fileSize: 20 * 1024 * 1024 } });

router.get("/", (req, res) => {
  if (!req.user) {
    console.log(req.user);
    console.log("not logged in");
    return res.status(401).send("로그인이 필요합니다.");
  }
  const user = Object.assign({}, req.user.toJSON());
  delete user.password;
  return res.json(user);
});

router.post("/signup", async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = await db.User.create({
      username: req.body.username,
      password: hashedPassword,
      name: req.body.name,
      division: req.body.division,
    });
    if (req.body.division) {
      const shop = await db.Shop.create({
        name: req.body.name,
        bizcode: req.body.bizcode,
        address: req.body.address,
        addressDetail: req.body.addressDetail,
      });
      user.addShop(shop);
    }
    return req.login(user, async (err) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      const session = await db.User.findOne({
        where: { id: user.id },
        include: [{ model: db.Shop }],
        attributes: ["id", "name", "division"],
      });
      req.session.save(() => {
        return res.status(200).json(session);
      });
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    req.login(user, async (loginErr) => {
      try {
        if (loginErr) {
          return next(loginErr);
        }
        const fullUser = await db.User.findOne({
          where: { id: user.id },
          include: [
            {
              model: db.Shop,
            },
          ],
          attributes: ["id", "name", "username", "division"],
        });
        console.log("login success!!");
        return res.json(fullUser);
      } catch (e) {
        console.log(e);
        next(e);
      }
    });
  })(req, res, next);
});

router.post("/logout", async (req, res) => {
  console.log(req.user);
  // await req.logout();
  // await req.session.destroy();
  // return res.json({ message: "Logged out successfully" });
});

router.post("/load/user", async (req, res) => {
  try {
    const userData = await db.User.findOne({
      where: { id },
      include: [{ model: db.Pet, as: "Pets", include: [{ model: "Image", as: "Images" }] }],
    });
    const result = Object.assign({}, userData);
    delete result.password;
    return res.status(200).json(result);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});

router.post("/confirm/bizcode", async (req, res, next) => {
  console.log(req.body.bizcode);
  try {
    const result = await db.Shop.findOne({ where: { bizcode: req.body.bizcode } });
    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/confirm/email", async (req, res, next) => {
  try {
    console.log(req.body.email);
    const result = await db.User.findOne({ where: { username: req.body.email } });
    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
