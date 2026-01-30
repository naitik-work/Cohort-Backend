const mongoose = require("mongoose");

const connectToDb= ()=>{
    mongoose.connect('mongodb+srv://naitik:pZsi7Vq4YVjtO3f7@cluster0.vftlhyz.mongodb.net/class1')
    .then(()=>{
        console.log('Databasse connected successfully!');
    })
}

module.exports= connectToDb;