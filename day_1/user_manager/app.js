var express = require("express");
var app = express();

var request = require("request");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended:true
}));

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

app.get("/new", function(req, res) {
	res.render("new");
});

app.post("/new", function(req, res) {
	request({
		method: "POST",
		uri: "http://daretodiscover.herokuapp.com/users",
		formData: {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			username: req.body.username,
			age: req.body.age
		}
	}, function(error, response, body) {
		res.redirect("/all");
	});
});

app.listen(3000);





