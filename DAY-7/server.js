//-server ko start krna aur database connect krna :))

const app= require('./src/app');
const connectToDb = require("./src/config/database");

connectToDb(); //connection to database :)) function call

app.listen(3000,()=>{
    console.log("Server is running at port 3000.");
})