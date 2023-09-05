import http from 'http';
import {Server} from 'socket.io';
import express  from 'express';

const app=express();
const server=http.createServer(app);
const io=new Server(server);

io.on("connection",(socket)=>{
    console.log("A user connected");
    //Listen for incomming message
    socket.on("message",(message)=>{
        console.log("Received message:",message);
        //Broadcast the message to all connected clients
        io.emit("message",message);
    })
    //Handle disconnection
    socket.on("disconnect",()=>{
        console.log("A user disconnected");
    })
})