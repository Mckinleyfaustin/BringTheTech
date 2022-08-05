const express = require("express");
const router = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("connected to database and listening on Port " + PORT);
  });
});
