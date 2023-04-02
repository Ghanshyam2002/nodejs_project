const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

//public static path
// console.log(path.join(__dirname, "../public"))
const static_path = path.join(__dirname, "../public");
const templet_path = path.join(__dirname, "../templets/views");
const partials_path = path.join(__dirname, "../templets/partials");

app.set("view engine", "hbs");
app.set("views", templet_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Opps! Page Not Found, Click here to go back"
  });
});

app.listen(port, () => {
  console.log(`listing to the port at ${port}`);
});
