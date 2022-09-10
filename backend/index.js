const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const dotenv = require("dotenv");
const passport = require("passport");
const http = require("http");
const https = require("https");
const fs = require("fs");
const mongoose = require("mongoose");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const schedule = require("node-schedule");
const SocketIo = require("./socket");

const passportConfig = require("./passport");
const db = require("./models");

const CoordinateModel = require("./mongoModels/coordinates");

const products = require("./routes/products");
const user = require("./routes/user");
const menu = require("./routes/menu");
const payments = require("./routes/payments");
const shop = require("./routes/shop");
const stock = require("./routes/stock");

dotenv.config();
const app = express();
db.sequelize.sync().then(() => {
  console.log("Mysql is connected");
});

mongoose.connect(`mongodb://localhost:27017/project1`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const mongodb = mongoose.connection;

mongodb.once("open", () => {
  console.log("mongodb is connected");
});

mongodb.on("error", (err) => {
  console.error(err);
});

app.use(morgan("dev"));
app.use("/uploads", express.static("./uploads"));
app.use(
  cors({
    origin: true,
  }),
);

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passportConfig();
// app.use(passport.session());

// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구

app.use("/products", products);
app.use("/user", user);
app.use("/menu", menu);
app.use("/payments", payments);
app.use("/shop", shop);
app.use("/stock", stock);

const options = {
  key: fs.readFileSync(__dirname + "/key.pem", "utf-8"),
  cert: fs.readFileSync(__dirname + "/cert.pem", "utf-8"),
};

app.post("/", async (req, res, next) => {
  try {
    let x;
    let y;

    let list;

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

      console.log(x);
      console.log(y);

      const list = await CoordinateModel.find({
        location: {
          $near: {
            $geometry: { type: "Point", coordinates: [y, x] },
            $maxDistance: 1000,
          },
        },
      });

      const ShopIds = [];

      await list.map((v) =>
        ShopIds.push({
          ShopId: v.ShopId,
        }),
      );
      const products = await db.Product.findAll({
        where: { [Op.or]: ShopIds },
        include: [{ model: db.Image }, { model: db.Discount }, { model: db.Shop }],
      });

      const filteredProducts = products.filter((product) => product.Discount !== null);

      return res.status(200).json({ list: list, products: filteredProducts });
    } else if (req.body === "undefined") {
      return res.status(200).json([]);
    }
  } catch (err) {
    console.error(err);
    return next();
  }
});

const OneSignal = require("onesignal-node");
const client = new OneSignal.Client(process.env.ONESIGNAL_KEY, process.env.ONESIGNAL_SECRET);

const notification = {
  contents: {
    tr: "hoyuen.kim",
    en: "success",
  },
  included_segments: ["Subscribed Users"],
  // filters: [{ field: 'tag', key: 'level', relation: '>', value: 10 }],
};

app.get("/onesignal", async (req, res, next) => {
  try {
    const response = await client.createNotification(notification);
    return res.status(200).send("success");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

const httpServer = http.createServer(app).listen(3030);

const httpsServer = https.createServer(options, app).listen(3065, () => {
  console.log(`The server is running on 3065 port`);
});

SocketIo(httpsServer, app);
