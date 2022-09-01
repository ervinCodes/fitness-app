const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
const app = express();
const connectDB = require("./config/database");
require("dotenv").config({ path: "./config/.env" }); // tells our server to listen to environment variables
const homeRoutes = require("./routes/home");

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Set Routes / listen for browser routes
app.use("/", homeRoutes);

// ========================
// Listen
// ========================
app.listen(process.env.PORT, () => {
  console.log("listening on 2016");
});
