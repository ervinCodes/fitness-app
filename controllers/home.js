// const Workouts = require("../models/workouts");
// const workouts = require("../models/workouts");

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
};
