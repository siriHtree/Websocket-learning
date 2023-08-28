import dotenv from 'dotenv';
import express from 'express';


//database
import connectDB from './database/connect.js';

dotenv.config();
const app=express();


const port=process.env.PORT || 3023;

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        console.log("mongoDB connected");
        await app.listen(port,()=>console.log("Server is listening to port no. 3023"))

    }catch(err){
        console.log(err)

    }
}
start();