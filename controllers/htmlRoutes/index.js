const router = require("express").Router();
const path = require("path");
const sequelize = require("../../config/connection");
const { Inventory } = require("../../models");

router.get("/", (req, res) => {
  Inventory.findAll({
    attributes: ["id", "title", "discription", "price", "image_url"],
  })
    .then((dbInventoryData) => {
      const items = dbInventoryData.map((item) => item.get({ plain: true }));
      res.render("product-body", { items });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
