const Post = require("../models/Post");
const Workout = require("../models/Workout");

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getProfile: async (req, res) => {
    try {
      //Since we have a session each request (req) contains the logged-in users info: req.user
      //console.log(req.user) to see everything
      //Grabbing just the posts of the logged-in user
      const workouts = await Workout.find({ user: req.user.id });
      //Sending post data from mongodb and user data to ejs template
      res.render("profile.ejs", {
        workouts: workouts,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getPlan: async (req, res) => {
    try {
      const workouts = await Workout.find({
        user: req.user.id,
        isDeleted: false,
      });
      const sundayItems = await Workout.countDocuments({
        user: req.user,
        isDeleted: false,
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
      const postById = await Post.find({ user: req.user.id });
      console.log(req.params.id);
      const post = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", {
        user: req.user.id,
        post: post,
        postById: postById,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getSunday: async (req, res) => {
    try {
      // Grabbing the workouts of the logged-in user and finding items that have the isDeleted:false
      const workouts = await Workout.find({
        user: req.user.id,
        isDeleted: false,
      });
      // Grabbing workout items with the listed requirements
      const workoutItems = await Workout.countDocuments({
        user: req.user.id,
        isDeleted: false,
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
