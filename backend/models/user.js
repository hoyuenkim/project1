module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      division: {
        type: DataTypes.BOOLEAN(),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  User.associate = (db) => {
    db.User.hasMany(db.Comment);
    db.User.hasMany(db.Shop);
  };

  return User;
};
