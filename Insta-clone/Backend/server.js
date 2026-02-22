require("dotenv").config();
const app= require("./src/app");
const connectToDb= require("./src/config/database");

connectToDb(); //connection to DB

app.listen(3000,()=>{
    console.log("Server is running at port 3000.");
})
