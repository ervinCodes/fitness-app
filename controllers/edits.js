const Workout = require("../models/Workout");
const Post = require("../models/Post");

module.exports = {
  getModalInfo: async (req, res) => {
    // console.log(req);
    try {
      // Grabbing workouts of the logged-in user
      const workout = await Post.findById({ _id: req.params.id });
      res.json(workout);
    } catch (err) {
      console.log(err);
    }
  },

  editModalInfo: async (req, res) => {
    console.log(req);
    try {
      await Post.findOneAndUpdate(
        { _id: req.body.workoutIdFromJSFile },
        {
          personalRecord: req.body.inputValueFromJSFile
        }
        );
        console.log("PR Updated!")
      res.json("PR Updated!");
    } catch (err) {
      console.log(err);
    }
  }
};
