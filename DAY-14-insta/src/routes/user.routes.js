const express= require("express");
const userController= require("../controllers/user.controller");
const identifyUser= require('../middlewares/auth.middleware');


const userRouter= express.Router();


//POST-> Follow request!!
//identifyuser has req.user=decoded (decoded.id= req.user.id)
userRouter.post('/follow/:username',identifyUser,userController.followUserController);

//POST->Unfollow request!!
userRouter.post('/unfollow/:username',identifyUser,userController.unfollowUserController);
module.exports= userRouter;