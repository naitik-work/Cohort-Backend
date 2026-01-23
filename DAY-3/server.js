const express= require("express");

const app= express();//creating instance of the server!!

app.get('/',(req,res)=>{
    res.send("Hey NAITIK!")
})
app.get('/home',(req,res)=>{
    res.send("HOME PAGE")
})
app.get('/about',(req,res)=>{
    res.send("ABOUT PAGE")
})
app.get('/info',(req,res)=>{
    res.send("NAitik info ABOUT PAGE")
})

app.listen(3000);