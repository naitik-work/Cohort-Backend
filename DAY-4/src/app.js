// -server ko start krna 
// -server ko config krna

const express= require("express");

const app= express(); //creating instance of the server

app.use(express.json());  //middleware

const notes= [
    // {
    //     name: 'test name 1',
    //     description: 'test description 1'
    // }
]

app.get("/", (req, res) => {
    res.send("hello Naitik")
})

//POST notes
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.send('Note created!')
})


//GET notes
app.get('/notes',(req,res)=>{
    res.send(notes);
})

//DELETE notes
app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index];
    res.send("Note deleted successfull!");
})


//PATCH notes(edit info in notes partially)
app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].description= req.body.description; 
    res.send('Notes updated successfully!!');
})

module.exports= app;
