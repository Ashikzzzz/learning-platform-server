const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

app.use(cors());

const allCourse = require("./data/course.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/course", (req, res) => {
  res.send(allCourse);
});

app.listen(port, () => {
  console.log("hi", port);
});
