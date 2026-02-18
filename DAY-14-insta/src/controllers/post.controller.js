const postModel= require('../models/post.model');
const ImageKit= require("@imageKit/nodejs");
const {toFile}= require("@imageKit/nodejs");
const { Folders } = require('@imageKit/nodejs/resources/index.js');
const jwt= require("jsonwebtoken");
const imageKit= new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req,res){
    console.log(req.body, req.file);

    const token= req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: "Token not provided, unauthorized access!"
        })
    }

    let decoded= null;
    try{
        decoded= jwt.verify(token, process.env.JWT_SECRET)
    }
    catch(err){
        return res.status(401).json({
            "message":"Unauthorized user!!"
        })
    }
    
    
    console.log('decoded');

    const file= await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "cohort-2-insta-clone"
    })
    // res.send(file);

    const post= await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    })

    res.status(201).json({
        message:"new post created succesfully.",
        post
    })
}

module.exports = {
    createPostController
}