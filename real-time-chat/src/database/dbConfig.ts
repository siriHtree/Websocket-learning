import mongoose from 'mongoose';
 export const connect=async()=>{
    try{
        mongoose.connect(process.env.NEXT_MONGO_URI!);
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("MongoDB connected successfully");
        });
        connection.on("error",(err)=>{
            console.log("MongoDb connection error. Please make sure MongoDb is running"+err)
            process.exit();
        });


    }
    catch(err){
        console.log("something went wrong!");
        console.log(err);

    }
 }