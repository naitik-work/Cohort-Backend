import express from "express";
import authRouter from "./routes/auth.routes.js";
import handleError from "./middleware/error.middleware.js";
import dotenv from "dotenv";

dotenv.config();

const app= express();

//middlewares
app.use(express.json());
app.use("/api/auth", authRouter);
app.use(handleError); //always at last use as a middleware

export default app;


