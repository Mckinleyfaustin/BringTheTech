const router = require("express").Router();
const apiRoutes = require("./page-items-api");
const htmlRoutes = require("./htmlRoutes");

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
