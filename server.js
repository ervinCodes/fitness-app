const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const bodyParser = require("body-parser");
const homeRoutes = require("./routes/home");
const postRoutes = require("./routes/posts");
const editRoutes = require("./routes/edits");
const router = require("./routes/home");

app.use(bodyParser.json());

// Use .env file to config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect to the database before listening
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
      console.log("listening on 2016");
  })
})


// Use EJS for views
app.set("view engine", "ejs");

// Static folder
app.use(express.static("public"));

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parses incoming JSON requests and puts the parsed data in req

// Logging
app.use(logger("dev"));

// Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use flash messages for errors, info, ect...
app.use(flash());

// Setup Routes for which the server is listening...
app.use("/", homeRoutes);
app.use("/post", postRoutes);
app.use("/edit", editRoutes);

// Server running
// app.listen(process.env.PORT, () => {
//   console.log("listening on 2016");
// });
