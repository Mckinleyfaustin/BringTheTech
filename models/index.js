const Inventory = require("./Inventory");
const Cart = require("./cart");
const User = require("./user");

Cart.hasMany(Inventory);

Inventory.belongsTo(Cart);

User.hasOne(Cart, {
  foreignKey: "user_id",
});

Cart.hasMany(User, {
  foreignKey: "user_id",
});

module.exports = { Inventory, Cart, User };
