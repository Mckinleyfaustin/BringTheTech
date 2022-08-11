const Inventory = require("./Inventory");
const Cart = require("./cart");
const User = require("./user");

Cart.hasMany(Inventory);

Inventory.belongsTo(Cart);

User.hasOne(Cart);

Cart.belongsTo(User);

module.exports = { Inventory, Cart, User };
