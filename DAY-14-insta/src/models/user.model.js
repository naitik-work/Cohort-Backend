const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    username: {
        type:String,
        unique:[true,"Username is already taken."],
        required:[true,"User name is required."]
    },
    password: {
        type:String,
        required:[true,"Password is required."]
    },
    email: {
        type:String,
        unique:[true,"Email already exists."],
        required:[true,"Email is required."]
    },
    bio: {
        type:String    
    },
    profile_image: {
        type:String,
        // default:
    }
})

const userModel= mongoose.model("users", userSchema);

module.exports= userModel;