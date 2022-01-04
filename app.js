//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//Home
app.get("/", function(req, res) {
  res.render("home.ejs");
});
app.get("/home", function(req, res) {
  res.render("home.ejs");
});

//Accomodation
app.get("/accomodation", function(req, res) {
  res.render("accomodation.ejs");
});

//Dine
app.get("/dine", function(req, res) {
  res.render("dine.ejs");
});

//Dine
app.get("/contact", function(req, res) {
  res.render("contact.ejs");
});

//Test
app.get("/test", function(req, res) {
  res.render("test.ejs");
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
