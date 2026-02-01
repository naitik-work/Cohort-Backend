//-server ko create and config krna

const express= require("express");
const noteModel= require("./models/notes.model");
const app = express(); //instance of the server created

app.use(express.json()); //Middleware

//POST API (req.body)

app.post('/notes',async (req,res)=>{
    const {title,description}= req.body;

    const note= await noteModel.create({
        title,description
    })

    res.status(201).json({
        message: "Note created successfull!",
        note
    })
})



module.exports= app;