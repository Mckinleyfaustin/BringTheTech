const router = require("express").Router();
const { Inventory } = require("../../models");

router.get("/", (req, res) => {
  //gets all inventory rows
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
  //creates a row in inventory table
  Inventory.create({
    title: req.body.title,
    discription: req.body.discription,
    price: req.body.price,
    image_url: req.body.image_url,
  })
    .then((dbInventoryData) => {
      res.json(dbInventoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  //deletes inventory row by param id
  Inventory.destroy({
    where: {
      id: req.params.id,
    },
  });
});

module.exports = router;
