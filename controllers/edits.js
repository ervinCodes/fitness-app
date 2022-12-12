const Workout = require("../models/Workout");
const Post = require("../models/Post");

module.exports = {
  getModalInfo: async (req, res) => {
    console.log(req);
    try {
      // Grabbing workouts of the logged-in user
      const workout = await Post.findById({ _id: req.params.id });
      // const workout = await Post.findById({
      //   _id: req.body.workoutIdFromJSFile,
      // });
      res.json(workout);
    } catch (err) {
      console.log(err);
    }
  },
};
