module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define(
    "Shop",
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      bizcode: {
        type: DataTypes.INTEGER(),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      address_detail: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      lnt: {
        type: DataTypes.DOUBLE(),
        allowNull: true,
      },
      lng: {
        type: DataTypes.DOUBLE(),
        allowNull: true,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  Shop.associate = (db) => {
    db.Shop.hasMany(db.Product);
    db.Shop.hasMany(db.Comment);
    db.Shop.belongsTo(db.User);
  };
  return Shop;
};
