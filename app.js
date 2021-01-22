const express = require("express");
const morgan = require("morgan");
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000);
