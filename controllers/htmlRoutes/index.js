const router = require("express").Router();
const path = require("path");
const sequelize = require("../../config/connection");
const { Inventory, Cart } = require("../../models");

router.get("/", (req, res) => {
  //console.log(req.session);

  //getting all of inventory table
  Inventory.findAll({
    attributes: ["id", "title", "discription", "price", "image_url"],
  })
    .then((dbInventoryData) => {
      //getting array of plain objects
      const items = dbInventoryData.map((item) => item.get({ plain: true }));
      //call product-body page and passes in needed variables
      res.render("product-body", { items, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  //if user is logged in sends then back to main page
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/cart", (req, res) => {
  // gets all rows of card that belongs to user
  Cart.findAll({
    attributes: ["id", "inventory_title", "inventory_price", "user_id"],
    where: {
      user_id: req.session.user_id,
    },
  })
    .then((dbCartData) => {
      // gets array of plain objects
      const checkout = dbCartData.map((item) => item.get({ plain: true }));
      //calls to display cart passing in nessesary variables
      res.render("cart", { checkout, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/seed", (req, res) => {
  res.render("seeddb");
});

module.exports = router;
