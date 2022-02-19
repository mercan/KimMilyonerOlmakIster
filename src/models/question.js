const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Questions = new Schema(
  {
    question: {
      type: String,
      required: true,
      unique: true,
    },

    difficulty: {
      type: Number,
      required: true,
    },

    answers: {
      type: Map,
      of: String,
    },

    correctAnswer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

Questions.index({ difficulty: 1 });

module.exports = mongoose.model("Question", Questions);
