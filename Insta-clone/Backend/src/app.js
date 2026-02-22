const express= require("express");
const cookie= require("cookie-parser");
const cookieParser = require("cookie-parser");

const app= express();

//Routers
const authRouter= require("./routes/auth.route");
const postRouter= require("./routes/post.routes");
const userRouter= require('./routes/user.routes');

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use('/api/posts',postRouter);
app.use('/api/auth',authRouter);
app.use('/api/users',userRouter);


module.exports= app;