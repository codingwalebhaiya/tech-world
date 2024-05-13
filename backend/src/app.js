import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))

// get data as a json form
app.use(express.json({limit:"16kb"}))

// get data as a url form 
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// get data as a  pdf , images 
// i  mean create public folder and can access theses pdf, image by everyone 
app.use(express.static("public"))

// server read and set the cookie of user browser by cookieParser 
app.use(cookieParser())


// routes import
import userRouter from "./routes/user.routes.js"

// routes declaration 
app.use("/api/v1/users", userRouter)

// http://localhost:4000/api/v1/users/register

 
 
export default app;    
 