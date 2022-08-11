const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Inventory extends Model {}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {},
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "inventory",
  }
);

module.exports = Inventory;
