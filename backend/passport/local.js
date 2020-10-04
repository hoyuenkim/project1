const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const db = require("../models");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      async (username, password, done) => {
        try {
          const user = await db.User.findOne({
            where: { username },
            include: [{ model: db.Shop }],
          });
          if (!user) {
            console.log("not existing");
            return done(null, false, { reason: "존재하지 않는 사용자입니다!" });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            console.log(`login success`);
            return done(null, user);
          }
          console.log("wrong password");
          return done(null, false, { reason: "비밀번호가 틀립니다." });
        } catch (e) {
          console.error(e);
          return done(e);
        }
      }
    )
  );
};
