const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
//using layout library
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const app = express();

//listen to port 3000
const port = process.env.PORT || 3000;

app.use(express.static("./assets"));
app.use(expressLayouts);
app.use(cookieParser());
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
// Parse JSON bodies
app.use(bodyParser.json());

//extract styles and scripts from sub pages into layouts
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//setup view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//use express router
app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
