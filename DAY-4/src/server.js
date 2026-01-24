const express= require('express');

const app = express(); //instance of the server

app.use(express.json)
const notes=[];


app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.send('Note Created!')
})

app.get('/notes',(req,res)=>{
    res.send(notes);
})

app.get('/home',(req,res)=>{
    res.send('Welcome to home page!!');
})
app.get('/',(req,res)=>{
    res.send('Welcome!!');
})


app.listen(3000, ()=>{
    console.log('Server is running on the port 3000')
})

