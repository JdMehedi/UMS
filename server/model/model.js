const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required."],
    minlength: [3, "too short"],
    // custom validation
  },
  email: {
    type: String,
    required: [true, "The Email is required."],
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  status: Boolean,
});

const collection = mongoose.model("users", schema);

module.exports = collection;
