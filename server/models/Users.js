import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter your name"],
    },
    email:{
        type:String,
        required:[true,"please Enter your email"]
    }
})

const Users=mongoose.model('users',userSchema);
export default Users;