var express = require("express");
var app = express();

app.get("/add/:num1/:num2", function(req, res) {
	var number1 = parseInt(req.params.num1);
	var number2 = parseInt(req.params.num2);

	res.send("The result is: " + (number1 + number2));
});

app.get("/subtract/:num1/:num2", function(req, res) {
	var number1 = parseInt(req.params.num1);
	var number2 = parseInt(req.params.num2);

	res.send("The result is: " + (number1 - number2));
});

app.get("/multiply/:num1/:num2", function(req, res) {
	var number1 = parseInt(req.params.num1);
	var number2 = parseInt(req.params.num2);

	res.send("The result is: " + (number1 * number2));
});

app.get("/divide/:num1/:num2", function(req, res) {
	var number1 = parseInt(req.params.num1);
	var number2 = parseInt(req.params.num2);

	res.send("The result is: " + (number1 / number2));
});

app.listen(3000);