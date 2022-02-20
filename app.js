const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv/config");

app.use(bodyParser.json());
//Import Routes
const postsRoute = require("./Routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("we are on home");
});

//Connecting to mongodb
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("connected to DB")
);

//Start listening
app.listen(4000);
