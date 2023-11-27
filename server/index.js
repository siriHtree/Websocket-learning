import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
//database
import connectDB from './database/connect.js';
//APIs
import UserAPI from './routes/users.js';
//socket connection
import http from 'http';
import {Server} from "socket.io";
dotenv.config();

const app=express();
const port=process.env.PORT || 4000;
app.use(express.json());
app.use(bodyParser.json({extender:true}));
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());
const server=http.createServer(app);
const io=new Server(server,{
  cors:{
    origin:process.env.CLIENT_URL,
    methods:['GET',"POST"],

  }
});

/**
 * Routes or API */ 
app.use('/api/v1/auth',UserAPI)

 io.on('connection',(socket)=>{
    // Listen for incoming messages

    socket.on("username",(data)=>{
  });
  socket.on("send_message",(data)=>{
    io.emit("get_message", data);
  })

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
 })


const start=async()=>{
    try{
        // await connectDB(process.env.MONGO_URI);
        // console.log("mongoDB connected");
        await server.listen(port,()=>console.log(`Server is listening to port no. ${port}`))

    }catch(err){
        console.log(err)

    }
}
start();