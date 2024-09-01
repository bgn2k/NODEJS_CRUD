const mongoose = require('mongoose');
//MongoDB Schema
//Creating schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    designation: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
//Creating model
const User = mongoose.model('user', userSchema);

module.exports = User;
