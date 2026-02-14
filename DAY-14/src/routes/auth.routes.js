const express= require("express");
const userModel= require('../models/user.model');
const authRouter= express.Router();
const crypto= require("crypto");
const jwt= require("jsonwebtoken");


/* 
POST api-> api/auth/register
*/
authRouter.post('/register', async(req,res)=>{
    const {name, email, password}= req.body;

    const isUserAlreadyExists= await userModel.findOne({email});
    if(isUserAlreadyExists){
        res.status(409).json({
            message: "User email already exists!"
        })
    }

    const userPassword= password===crypto.createHash('md5').update(password).digest('hex');

    const user= await userModel.create({
        name, email, password: crypto.createHash('md5').update(password).digest('hex')
    })
    
    const token= jwt.sign({
        id: user._id
    }
    ,process.env.JWT_SECRET, 
    {expiresIn: "2hr"});


    res.cookie("token", token);

    res.status(201).json({
        message: "User created successfully.",
        user
    })

})


module.exports= authRouter;
