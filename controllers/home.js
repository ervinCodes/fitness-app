const Post = require("../models/Post");
const Workout = require("../models/Workout");

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getProfile: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("profile.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getPlan: async (req, res) => {
    try {
      const workouts = await Workout.find({ userId: req.user.id });
      const sundayItems = await Workout.countDocuments({
        userId: req.user.id,
        completed: false,
        isSunday: true,
      });
      res.render("plan.ejs", {
        workouts: workouts,
        user: req.user,
        sundayItems: sundayItems,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find({ userId: req.user.id });
      const workoutItems = await Post.countDocuments({
        userId: req.user.id,
        completed: true,
      });
      res.render("feed.ejs", {
        posts: posts,
        user: req.user,
        workoutItems: workoutItems,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getSunday: async (req, res) => {
    try {
      const workouts = await Workout.find({ userId: req.user.id });
      const workoutItems = await Workout.countDocuments({
        userId: req.user.id,
        completed: false,
        isSunday: true,
      });
      res.render("days/sunday.ejs", {
        workouts: workouts,
        user: req.user,
        workoutItems: workoutItems,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getMonday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("days/monday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getTuesday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("days/tuesday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getWednesday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("days/wednesday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getThursday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("days/thursday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFriday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("days/friday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getSaturday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("days/saturday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
