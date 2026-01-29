//-server ko start krna aur database connect krna :))

const app= require('./src/app');
const mongoose = require("mongoose");

const connectToDb= ()=>{
    mongoose.connect('mongodb+srv://naitik:pZsi7Vq4YVjtO3f7@cluster0.vftlhyz.mongodb.net/class1')
    .then(()=>{
        console.log('Databasse connected successfully!');
    })
}

connectToDb(); //connection to database :)) function call

app.listen(3000,()=>{
    console.log("Server is running at port 3000.");
})