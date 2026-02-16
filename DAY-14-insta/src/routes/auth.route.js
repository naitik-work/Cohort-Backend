const express= require("express");
const userModel= require("../models/user.model");
const crypto= require("crypto");
const jwt= require("jsonwebtoken");

const authRouter= express.Router();

//Register(POST)
authRouter.post('/register', async(req,res)=>{

    const {username, password, email, bio, profile_image}= req.body;

    const isUserAlreadyExists= await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })
    if(isUserAlreadyExists){
        res.status(409).json({
            message: "User already exists."+(isUserAlreadyExists.email===email?"Email already exists":"Username already exists.")
        })
    }

    const hash= crypto.createHash('sha256').update(password).digest('hex');//hashing on the password.

    const user= await userModel.create({
        username,
        email,
        bio,
        profile_image,
        password: hash
    })

    const token= jwt.sign({
        id: user._id
    },
    process.env.JWT_SECRET,
    {expiresIn: "1d"}
    )

    res.cookie('token', token);
    
    res.status(201).json({
        message:"User registered successfully.",
        username: user.username,
        email: user.email,
        bio: user.bio,
        profile_image: user.profile_image

    })
})


//login POST request

authRouter.post('/login', async(req,res)=>{
    const {username,email,password}= req.body;

    const user= await userModel.findOne({
        $or: [
            {username: username},
            {email: email}
        ]
    })

    if(!user){
        res.status(400).json({
            message: "Username or email is not registered."
        })
    }

    const hash= crypto.createHash('sha256').update(password).digest('hex');
    
    const userPassword= user.password===hash;

    const token= jwt.sign({
        user: user._id
    },
        process.env.JWT_SECRET,
        {expiresIn:'1d'}
    )

    res.status(201).json({
        message:"Logged in!",
        username: user.username,
        email: user.email,
        bio: user.bio,
        profile_image: user.profile_image

    })

    res.cookie('token',token);


})
module.exports= authRouter;