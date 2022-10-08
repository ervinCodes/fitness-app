const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  sets: {
    type: String,
    require: true,
  },
  reps: {
    type: String,
    require: true,
  },
  weight: {
    // will be on edit
    type: Number,
    required: true,
  },
  personalRecord: {
    // will be on edit
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  isSunday: {
    type: Boolean,
    required: true,
  },
  isMonday: {
    type: Boolean,
    required: true,
  },
  isTuesday: {
    type: Boolean,
    required: true,
  },
  isWednesday: {
    type: Boolean,
    required: true,
  },
  isThursday: {
    type: Boolean,
    required: true,
  },
  isFriday: {
    type: Boolean,
    required: true,
  },
  isSaturday: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Workout", WorkoutSchema);
