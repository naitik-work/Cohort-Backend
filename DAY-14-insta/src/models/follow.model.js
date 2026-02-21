const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: String,
    },
    followee: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

//koi ek user kisi ko ek hee bar follow kre ye make sure hota hai isse.
followSchema.index({ follower:1, followee:1}, {unique: true})

const followModel= mongoose.model("follows", followSchema);

module.exports= followModel;