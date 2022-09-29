const cloudinary = require("../middleware/cloudinary");
const Workout = require("../models/Workout");

module.exports = {
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
      const workouts = await Workout.find({ user: req.user.id });
      res.render("plan.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getSunday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("sunday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getMonday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("monday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getTuesday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("tuesday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getWednesday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("wednesday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getThursday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("thursday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFriday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("friday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getSaturday: async (req, res) => {
    try {
      const workouts = await Workout.find({ user: req.user.id });
      res.render("saturday.ejs", { workouts: workouts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const workouts = await Workout.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const workouts = await Workout.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createSundayWorkout: async (req, res) => {
    console.log(req.body);
    try {
      await Workout.create({
        title: req.body.title,
        sets: req.body.sets,
        reps: req.body.reps,
        weight: req.body.weight,
        personalRecord: req.body.personalRecord,
        userId: req.user.id,
        completed: false,
        isSunday: true,
        isMonday: false,
        isTuesday: false,
        isWednesday: false,
        isThursday: false,
        isFriday: false,
        isSaturday: false,
      });
      console.log("Workout has been added!");
      res.redirect("/sunday");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Workout.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Workout.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
