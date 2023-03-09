var HTTP_PORT = process.env.port || 8080;
var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("<strong>Home</strong>");
});

app.listen(HTTP_PORT);
