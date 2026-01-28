//-server ko start krna
//-server ko database se connect krna

const app= require('./src/app.js');
const mongoose= require('mongoose');

function connectToDb(){
    mongoose.connect('mongodb+srv://naitik:Al5YyDzrNi1FRLsB@cluster0.7jcpb4f.mongodb.net/')
    .then(()=>{
    console.log("Database connection successfull :)")
})
}
connectToDb();
app.listen(3000,()=>{
    console.log('Server is running on port 3000!');
})