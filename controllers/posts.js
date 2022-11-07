const Workout = require("../models/Workout");
const Post = require("../models/Post");

module.exports = {
  // createPost: async (req, res) => {
  //   console.log(req.body.checkedIdFromJsFile);
  //   try {
  //     await Post.create({
  //       title: req.body.title,
  //       // likes: 0,
  //       user: req.user.id,
  //     });
  //     console.log("Post has been added!");
  //     res.redirect("/feed");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // createSundayWorkout: async (req, res) => {
  //   console.log(req.body);
  //   try {
  //     await Workout.create({
  //       title: req.body.title,
  //       sets: req.body.sets,
  //       reps: req.body.reps,
  //       weight: req.body.weight,
  //       personalRecord: req.body.personalRecord,
  //       user: req.user.id,
  //       completed: false,
  //       isSunday: true,
  //       isMonday: false,
  //       isTuesday: false,
  //       isWednesday: false,
  //       isThursday: false,
  //       isFriday: false,
  //       isSaturday: false,
  //     });
  //     console.log("Workout has been added!");
  //     res.redirect("/sunday");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  deleteWorkout: async (req, res) => {
    console.log(req.body.workoutIdFromJSFile);
    try {
      await Workout.findOneAndDelete({ _id: req.body.workoutIdFromJSFile });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      await Workout.findOneAndUpdate(
        { _id: req.body.workoutIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Workout.findOneAndUpdate(
        { _id: req.body.workoutIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  resetWorkout: async (req, res) => {
    try {
      await Workout.updateMany(
        { completed: true }, //specifies what property we want to update
        // { _id: req.body.workoutIdFromJSFile },
        {
          $set: { completed: false }, // sets the value of the property we want it to change to
        }
      );
      console.log("reset");
      res.json("reset");
    } catch (err) {
      console.log(err);
    }
  },
};
