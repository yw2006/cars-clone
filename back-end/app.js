import express  from "express";
import { configDotenv } from "dotenv";
import bcrypt from "bcrypt";
import userRouter from "./routes/userRoutes.js";
import { addCustomer } from "./utils/database.js";
//config
const app=express()
configDotenv()
// middlewares
app.use(express.json())
// routes 

app.use(userRouter)

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('somthing broking')
})

// server start

const port = process.env.PORT || 5000;
    app.listen(port,()=>{
    console.log(`the server is running on ${port}`)
    })

