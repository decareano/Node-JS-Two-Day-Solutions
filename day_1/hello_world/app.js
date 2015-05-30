var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hello World");
});

app.get("/greet/:name", function(req, res) {
	res.send("Hello " + req.params.name);
});

app.listen(3000);