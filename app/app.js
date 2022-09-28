const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
let ejs = require("ejs");

// const apiRouter = require("./api/routes");
const staticRouter = require("./public/router");
const handleError = require("./handleError");
const handleCors = require("./handleCors");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(handleCors);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public"));

app.use("/api", (req, res) => res.end("api routes"));
app.get("/*", staticRouter);

// app.use("/api", apiRouter);

//handling 404 ndpoints
app.use("/", (req, res, next) => {
  const error = new Error("Resource Not Found");
  error.status = 404;
  next(error);
});

//ultimate error handler
app.use(handleError);

module.exports = app;
