const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static("public"));

const port = 3000;

app.listen(port);

module.exports = {
	app
}