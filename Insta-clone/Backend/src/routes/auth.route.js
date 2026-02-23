const express= require("express");
const authController= require("../controllers/auth.controller")
const identifyUser= require('../middlewares/auth.middleware');
const authRouter= express.Router();

//Register(POST)
authRouter.post('/register', authController.registerController);


//login POST request

authRouter.post('/login', authController.loginController); 

//get me GET request
authRouter.get('/get-me', identifyUser, authController.getMeController);

module.exports= authRouter;