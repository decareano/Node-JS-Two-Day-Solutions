var express = require("express");
var app = express();

var request = require("request");

app.set("view engine", "ejs");

app.get("/facebook", function(req, res) {
	request("http://facebook.com", function(error, response, body) {
		res.render("index", {
			data: body
		});
	});
});

app.get("/api", function(req, res) {
	request("http://daretodiscover.herokuapp.com/users", function(error, response, body) {
		//console.log(JSON.parse(body));
		var users = JSON.parse(body);

		for (var i = 0; i < users.length; i++) {
			console.log(users[i].firstname);
		}
	});
});

app.listen(3000);