const mongoose = require("mongoose");
const url = process.env.CONN_STR;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db;

const connectDB = async () => {
  try {
    await mongoose.connect(url, connectionParams);
    db = mongoose.connection;
    console.log("Database connection successful.");
  } catch (err) {
    console.log(err);
    console.error("Error in connecting to database!!!");
  }
};

connectDB();
module.exports = db;

// mongoose.connect("mongodb://127.0.0.1/placement_cell_dev", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Equivalent code without bind
// db.on("error", (error) => {
//   console.error("Error connecting to MongoDB", error);
// });

// db.once("open", function () {
//   console.log("connected to Database : MongoDB");
// });
