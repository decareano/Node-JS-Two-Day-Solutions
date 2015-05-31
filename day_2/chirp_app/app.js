var express = require("express");
var app = express();

//Body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended:true
}));

//Method override
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

//Static serving
app.use(express.static(__dirname + '/public'));

//Ejs setup
app.set("view engine", "ejs");

//Database
var pg = require("pg");
var models = require("./models/index.js");

app.get("/", function(req, res) {
	models.Chirp.findAll().done(function(chirps, error) {
		res.render("index", {
			chirps: chirps
		});
	});
});

app.post("/", function(req, res) {
	models.Chirp.create({
		chirp_text: req.body.chirp_text
	}).done(function() {
		res.redirect("/");
	});
});

app.get("/edit/:id", function(req, res) {
	models.Chirp.findById(req.params.id).done(function(chirp, error) {
		res.render("edit", {
			chirp: chirp
		});
	});
});

app.put("/edit/:id", function(req, res) {
	models.Chirp.findById(req.params.id).done(function(chirp, error) {
		if (req.body.delete) {
			chirp.destroy().done(function() {
				res.redirect("/");
			});
		} else {
			chirp.updateAttributes({
				chirp_text: req.body.chirp_text
			}).done(function() {
				res.redirect("/");
			});
		}
	});
});

app.listen(3000);