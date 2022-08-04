const router = require("express").Router();
const { Inventory } = require("../../models");

router.get("/", (req, res) => {
  Inventory.findAll({
    attributes: ["id", "title", "discription", "price", "image_url"],
  })
    .then((dbInventoryData) => res.json(dbInventoryData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
