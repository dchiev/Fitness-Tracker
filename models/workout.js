const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "What type of workout are you performing?",
      },
      name: {
        type: String,
        trim: true,
        required: "What is the name of the workout?",
      },
      duration: {
        type: Number,
        required: "How long was the workout?",
      },
      weight: {
        type: Number,
        required: "How much weight was used (in pounds)?",
      },
      reps: {
        type: Number,
        required: "How many reps did you perform?",
      },
      sets: {
        type: Number,
        required: "How many sets did you perform?",
      },
    },
  ],

  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
