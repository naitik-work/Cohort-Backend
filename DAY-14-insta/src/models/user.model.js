const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username is already taken."],
    required: [true, "User name is required."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  email: {
    type: String,
    unique: [true, "Email already exists."],
    required: [true, "Email is required."],
  },
  bio: {
    type: String,
  },
  profile_image: {
    type: String,
    default: "https://ik.imagekit.io/FASK13YW/defaultUserImg.webp",
  },

  //* 1 id= 12bytes//but mongo db ka, max doc size 16MB//-->solution: edge collection
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
