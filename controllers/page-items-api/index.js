const router = require("express").Router();

const inventoryRoutes = require("./inventory-routes");

router.use("/inventory", inventoryRoutes);

module.exports = router;
