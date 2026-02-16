const express= require("express");
const authController= require("../controllers/auth.controller")

const authRouter= express.Router();

//Register(POST)
authRouter.post('/register', authController.registerController);


//login POST request

authRouter.post('/login', authController.loginController); 
module.exports= authRouter;