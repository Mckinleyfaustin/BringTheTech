const router = require("express").Router();
const { Cart } = require("../../models");

router.get("/", (req, res) => {
  Cart.findAll({
    attributes: ["id", "inventory_title", "inventory_price", "user_id"],
    where: {
      user_id: req.session.user_id,
    },
  })
    .then((dbCartData) => res.json(dbCartData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  if (!req.session.loggedIn) {
    res.statusMessage = "you are not logged in!";
    res.status(400).end();
    return;
  }
  Cart.create({
    inventory_title: req.body.title,
    inventory_price: req.body.price,
    user_id: req.session.user_id,
  })
    .then((dbCartData) => res.json(dbCartData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Cart.destroy({
    where: {
      user_id: req.params.id,
    },
  })
    .then((dbCartData) => res.json(dbCartData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/test", (req, res) => {
  Cart.findAll({
    attributes: ["id", "inventory_title", "inventory_price", "user_id"],
  }).then((dbCartData) => res.json(dbCartData));
});

module.exports = router;
