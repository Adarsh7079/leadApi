import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app= express()
app.use(cors({
    origin: 'http://localhost:5173', // Specify the allowed origin
    credentials: true, // Allow credentials (cookies)
}));
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))

//access configuration for public folder
app.use(express.static("public"))
app.use(cookieParser())  


//routes import 
import leadRouter from "./routes/lead.routes.js"

//routes declaration 
app.use("/api",leadRouter)

export {app} 