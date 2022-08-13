const router = require("express").Router();
const { User } = require("../../models");

router.get("/", (req, res) => {
  //gets all users
  User.findAll({
    attributes: ["id", "username", "email", "password"],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  //gets one user by email for login
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    //checks if email used exists in table
    if (!dbUserData) {
      res.status(400).json({ message: "No user by that email address" });
      return;
    }

    //checks if password matches password in table
    if (!(dbUserData.password === req.body.password)) {
      res.status(400).json({ message: "Password incorrect!" });
      return;
    }

    //saves vaiables to cookie
    req.session.save(() => {
      (req.session.user_id = dbUserData.id), (req.session.loggedIn = true);
      res.json({ user: dbUserData, message: "logged in" });
    });
  });
});

router.post("/logout", (req, res) => {
  //checks if user is logged in
  if (req.session.loggedIn) {
    //if user is logged in destroys cookies
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/", (req, res) => {
  //creates new row in users table
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      //creates cookie variables on user
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  //deletes user on param id
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user by that id!" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
