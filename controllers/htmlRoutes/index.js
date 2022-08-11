const router = require("express").Router();
const path = require("path");
const sequelize = require("../../config/connection");
const { Inventory, Cart } = require("../../models");

router.get("/", (req, res) => {
  console.log(req.session);
  Inventory.findAll({
    attributes: ["id", "title", "discription", "price", "image_url"],
  })
    .then((dbInventoryData) => {
      const items = dbInventoryData.map((item) => item.get({ plain: true }));
      res.render("product-body", { items, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/cart", (req, res) => {
  Cart.findAll({
    attributes: ["id", "inventory_title", "inventory_price", "user_id"],
    where: {
      user_id: req.session.user_id,
    },
  })
    .then((dbCartData) => {
      const checkout = dbCartData.map((item) => item.get({ plain: true }));
      res.render("cart", { checkout, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
