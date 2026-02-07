//server start krna aur databse se connect krna.

require("dotenv").config();
const app= require('./src/app');
const connectToDb= require('./src/config/database');

connectToDb(); //Database connection function call.


app.listen(3000,()=>{
    console.log("Server is running at port 3000.");
})