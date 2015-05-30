var express = require("express");
var app = express();

var request = require("request");

app.set("view engine", "ejs");

app.get("/first", function(req, res) {
	request("http://daretodiscover.herokuapp.com/users", function(error, response, body) {
		var users = JSON.parse(body);

		res.render("first", {
			allUsers: users
		});
	});
});

app.get("/last", function(req, res) {
	request("http://daretodiscover.herokuapp.com/users", function(error, response, body) {
		var users = JSON.parse(body);

		res.render("last", {
			allUsers: users
		});
	});
});

app.get("/all", function(req, res) {
	request("http://daretodiscover.herokuapp.com/users", function(error, response, body) {
		var users = JSON.parse(body);

		res.render("all", {
			allUsers: users
		});
	});
});

app.listen(3000);