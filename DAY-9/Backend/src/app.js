//server ko CREATE krna and config krna happens here.

const express= require("express");
const noteModel= require('./models/note.model')
const cors= require("cors");
const path= require('path');

const app= express(); //CREATING INSTANCE OF THE SERVER.
app.use(express.json()); //middleware
app.use(cors());

//http://localhost:3000/assets/index-BpE1wl4G.js

//http://localhost:3000/assets/index-Ben9sXv7.css
app.use(express.static('./public')); //for unexpected API calls
//-POST /api/notes
 
//-create new note and save data in mongodb
//-req.body = {titile,description}

app.post('/api/notes',async (req,res)=>{
    const {title, description}= req.body;

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "Note created successfull!",
        note
    })

})

//GET /api/notes
// to fetch all the notes data from the mongodb

app.get('/api/notes',async (req,res)=>{

    const notes= await noteModel.find(); //find method of mongodb returns data in the form of object array.

    res.status(200).json({
        message:"Notes fetched successfull.",
        notes
    })

})

//DELETE /api/notes/:id
//req.params.id se note delete krenge

app.delete('/api/notes/:id',async (req,res)=>{
    const id= req.params.id;
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        message:"Note deletion successfull!"
    })
})

//PATCH /api/notes/:id
//for updating description of any note using id.

app.patch('/api/notes/:id',async (req,res)=>{
    const id = req.params.id;
    const {title,description}= req.body;
    await noteModel.findByIdAndUpdate(id, {title,description});

    res.status(200).json({
        message:"Note updated successfully."
    })
})

app.use('*name',(req,res)=>{ 
    res.sendFile(path.join(__dirname,"..","/public/index.html")); 
})
module.exports = app;
