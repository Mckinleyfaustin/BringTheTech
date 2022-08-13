const router = require("express").Router();
const { Cart } = require("../../models");

router.get("/", (req, res) => {
  //console.log(req.session);
  //gets all cart rows
  Cart.findAll({
    attributes: ["id", "inventory_title", "inventory_price", "user_id"],
  })
    .then((dbCartData) => {
      res.json(dbCartData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  //checks if user logged in
  if (!req.session.loggedIn) {
    res.statusMessage = "you are not logged in!";
    res.status(400).end();
    return;
  }
  //if user is logged in creates next cart row added with user identifer
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
  //deletes cart item that has both userid and cartid
  Cart.destroy({
    where: {
      user_id: req.session.id,
      id: req.body.id,
    },
  })
    .then((dbCartData) => res.json(dbCartData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
