const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    inventory_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inventory_price: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "cart",
  }
);

module.exports = Cart;
