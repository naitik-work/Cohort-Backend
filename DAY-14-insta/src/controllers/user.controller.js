const followModel = require("../models/follow.model");
const userModel= require("../models/user.model");

async function followUser(req,res){

    const followerUsername= req.user.username;
    const followeeUsername= req.params.username;

    const followRecord= await followModel.create({
        follower: followerUsername,
        following: followeeUsername,
    })

    res.status(201).json({
        message: `You are following ${followeeUsername}`,
        follow: followRecord
    })

}



module.exports= {
    followUser
};