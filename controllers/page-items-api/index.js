const router = require("express").Router();

//sets up variables to use needed files
const inventoryRoutes = require("./inventory-routes");
const userRoutes = require("./user-routes");
const cartRoutes = require("./cart-routes");

//set url address to use needed route per route
router.use("/inventory", inventoryRoutes);
router.use("/users", userRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
