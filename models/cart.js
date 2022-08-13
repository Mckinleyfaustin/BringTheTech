const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cart extends Model {}

//creates cart table
Cart.init(
  {
    //declares id column
    id: {
      // what type of data is accepted
      type: DataTypes.INTEGER,
      //cannot be false
      allowNull: false,
      //acts as primary key
      primaryKey: true,
      //auto increments from last id number
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
