const express= require("express");
const userModel= require('../models/user.model');
const authRouter= express.Router();
const jwt= require("jsonwebtoken");
const crypto= require("crypto");
 
authRouter.post('/register',async (req,res)=>{
    const {name, email, password}= req.body;

    const isUserAlreadyExists= await userModel.findOne({email});//condition ke basis pe find krta hai here it is email.
    if(isUserAlreadyExists){
        return res.status(409).json({
            message: "User already exists with the same email."
        })
    }

    const hash= crypto.createHash("md5").update(password).digest("hex");

    const user= await userModel.create({
       name, email, password: hash
    })

    //creating token
    const token= jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token);

    res.status(201).json({
        message:"User registered successfully.",
        user,
        token
    })

})


authRouter.post('/protected',(req,res)=>{
    console.log(req.cookies); //object form me data output aata hai.

    res.status(200).json({
        message:"This is a protected route.",
    })
}) 

/* 
Controller-> wo callback jo kisi particular API call pe invoke ho, usey controller khte hai.
*/

authRouter.post("/login", async(req,res)=>{
    const {email, password}= req.body;

    const user= await userModel.findOne({email});
    if(!user){
        res.status(400).json({
            message: "User email does not exist!"
        })
    }
    const userPassword= user.password===crypto.createHash("md5").update(password).digest("hex");
    if(!userPassword){
        res.status(400).json({
            message:"Incorrect password."
        })
    }

    const token= jwt.sign({
        id: user._id
    }
    ,process.env.JWT_SECRET)

    res.cookie("jwt_token", token);
 
    res.status(200).json({
        message:`${user.name} logged in, welcome`,
        user,
    })
})

module.exports= authRouter;