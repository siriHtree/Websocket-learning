import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
//database
import connectDB from './database/connect.js';
//socket connection
import http from 'http';
import {Server} from "socket.io";
dotenv.config();

const app=express();
const port=process.env.PORT || 3000;

const server=http.createServer(app);
const io=new Server(server);

 app.get("/",(req,res)=>{


 res.send("hello world!")
 })
 io.on('connection',(socket)=>{
    console.log("a user connected");
    // Listen for incoming messages
  socket.on("message", (message) => {
    // console.log("Received message:", message);

    // Broadcast the message to all connected clients
    io.emit("message", message);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
 })


const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        console.log("mongoDB connected");
        await server.listen(port,()=>console.log(`Server is listening to port no. ${port}`))

    }catch(err){
        console.log(err)

    }
}
start();