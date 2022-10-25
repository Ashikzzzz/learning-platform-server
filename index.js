const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

app.use(cors());

const allCourse = require("./data/course.json");
const allCategory = require("./data/category.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/category", (req, res) => {
  res.send(allCategory);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const selectedCategory = allCourse.find(
    (course) => course.category_id === id
  );
  res.send(selectedCategory);
});

app.get("/course", (req, res) => {
  res.send(allCourse);
});

app.listen(port, () => {
  console.log("hi", port);
});
