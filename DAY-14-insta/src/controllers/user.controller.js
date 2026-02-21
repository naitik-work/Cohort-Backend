const followModel = require("../models/follow.model");
const userModel= require("../models/user.model");

async function followUserController(req,res){

    const followerUsername= req.user.username;
    const followeeUsername= req.params.username;

    const followRecord= await followModel.create({
        follower: followerUsername,
        following: followeeUsername,
    })

    //the user exists or not who is wished to follow check

    const isFolloweeExists= await userModel.findOne({username: followeeUsername});

    if(!isFolloweeExists){
        res.status(400).json({
            message: "User you are trying to follow does not exist!"
        })
    }

    //A user cannot follow itself.
    if(followerUsername===followeeUsername){
        res.status(400).json({
            message: "A user cannot follow itself."
        })
    }

    //A user cannot follow any user who is already followed by him/her

    const isAlreadyFollowing= await followModel.findOne(
        {
        follower: followerUsername,
        following: followeeUsername
        }
    )

    if(isAlreadyFollowing){
        res.status(200).json({
            message: `You already follow ${followeeUsername}`,
            follow: isAlreadyFollowing
        })
    }

    res.status(201).json({
        message: `You are following ${followeeUsername}`,
        follow: followRecord
    })

}

async function unfollowUserController(req,res){
    const followerUsername= req.user.username;
    const followeeUsername= req.params.username;

    const isUserFollowing= await followModel.findOne(
        {
            follower: followerUsername,
            followee: followeeUsername
        }
    )

    if(!isUserFollowing){ 
        res.status(400).json({
            message: `You are not following ${followeeUsername}`
        })
    }
    await userModel.findByIdAndDelete(isUserFollowing._id);

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}!`
    })
}
module.exports= {
    followUserController,
    unfollowUserController
};