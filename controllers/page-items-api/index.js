const router = require("express").Router();

const inventoryRoutes = require("./inventory-routes");
const userRoutes = require("./user-routes");
const cartRoutes = require("./cart-routes");

router.use("/inventory", inventoryRoutes);
router.use("/users", userRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
