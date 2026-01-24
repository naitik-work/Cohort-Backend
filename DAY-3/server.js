const express= require("express");

const app= express();//creating instance of the server!!

app.use(express.json()) //middleware(Abhi ke liye ignore, aage padhenge!!)

const notes= []


app.post('/notes',(req,res)=>{

    console.log(req.body);
    notes.push(req.body);
    res.send('note created!')
})

app.get('/notes',(req,res)=>{

    res.send(notes)
})



app.listen(3000,()=>{
    console.log('Server is running on port 3000!')
}); //to start the server