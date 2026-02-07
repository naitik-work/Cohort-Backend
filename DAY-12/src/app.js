//server ko create krna aur config krna

const express= require("express");
const app= express(); //server instantiated
const authRouter= require('./routes/auth.routes');
app.use(express.json()); //middleware to read data from req.body

app.use("/api/auth", authRouter);
module.exports= app;