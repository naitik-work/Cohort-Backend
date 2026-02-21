const express= require("express");
const userController= require("../controllers/user.controller");
const identifyUser= require('../middlewares/auth.middleware');


const userRouter= express.Router();

//identifyuser has req.user=decoded (decoded.id= req.user.id)
userRouter.post('/follow/:username',identifyUser,userController.followUser);


module.exports= userRouter;