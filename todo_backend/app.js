const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//bodyParser setting
app.use(bodyParser.json());

const mongoURI = "mongodb://localhost:27017/todo-demo";
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection Fail"), err;
  });

app.listen(5000, (req, res) => {
  console.log("server on 5000!");
});
