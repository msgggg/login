"use strict";

// module
const express = require("express");
const { use } = require("./src/routes/home");
const app = express();

// routing
const home = require("./src/routes/home");

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))

app.use("/", home); // use -> 미들웨어를 등록해주는 method

module.exports = app;