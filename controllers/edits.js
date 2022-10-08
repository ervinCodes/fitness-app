const Workout = require("../models/Workout");

module.exports = {
  editSundayWorkout: async (req, res) => {
    console.log(req.body);
    try {
      await Workout.findOneAndUpdate({
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
      console.log("Workout has been edited!");
      res.redirect("/sunday");
    } catch (err) {
      console.log(err);
    }
  },
};
