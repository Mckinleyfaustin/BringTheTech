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

router.post("/", (req, res) => {
  Inventory.create({
    title: req.body.title,
    discription: req.body.discription,
    price: req.body.price,
    image_url: req.body.image_url,
  })
    .then((dbInventoryData) => res.json(dbInventoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
