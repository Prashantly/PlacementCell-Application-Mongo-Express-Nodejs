const express = require("express");
const app = express();
//using layout library
const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);

//extract styles and scripts from sub pages into layouts
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(express.static("./assets"));

//setup view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//use express router
app.use("/", require("./routes"));
//listen to port 3000
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
