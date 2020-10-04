const passport = require("passport");
const db = require("../models");
const local = require("./local");

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("serializeUser");
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log("deserializeUser");
    try {
      console.log(`deserialize user`);
      const user = await db.User.findOne({
        where: { id },
        attributes: ["id", "username"],
      });
      return done(null, user);
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
};
