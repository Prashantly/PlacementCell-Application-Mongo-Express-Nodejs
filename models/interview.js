const mongoose = require("mongoose");

// create imterview schema
const interviewSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;
