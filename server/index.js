
const express=require('express')
const app=express()
const http=require('http');
const server=http.createServer(app);
const port=3000

const {Server}=require("socket.io");
const io=new Server(server);

//route
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/client/index.html');
})

io.on('connection',(socket)=>{
    console.log("a user connected");
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
    })
})

//server listener
server.listen(port,()=>{
    console.log(`listening on port ${port}`)
})