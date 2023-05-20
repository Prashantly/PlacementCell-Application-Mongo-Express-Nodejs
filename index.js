const express = require("express");
const app = express();

//use express router
app.use("/", require("./routes"));

//setup view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//listen to port 3000
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
