const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const cors = require("cors");
require("dotenv").config();

const app = express();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
//console.log("mongoouri", MONGODB_URI_PROD);
app.use(bodyParser.json());
app.use(cors());

app.use("/api", indexRouter);

//bodyParser setting
app.use(bodyParser.json());

const mongoURI = MONGODB_URI_PROD;

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
