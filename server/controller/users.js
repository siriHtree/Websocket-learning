import jwt from 'jsonwebtoken';
import { sendMagicLinkEmail } from '../middleware/SendMail.js';

const USERS=[
    {
        id:"lsdkf1",
        email:"moulsiri2301@gmail.com",
        username:'moulsiri'
    }
    
]

export const magicLogin=async(req,res)=>{
    try{
        const user=USERS.find(u=>u.email===req.body.email)
        if(user!=null){
            const token=jwt.sign({userId:user.id},process.env.JWT_SECRET,{
                expiresIn:'1h',
            })
            await sendMagicLinkEmail({email:user.email,token})
            res.status(200).json({success:true,message:"DONE"})

        }
         

    }catch(err){
        console.log(err)
        res.status(400).json({message:err.message})
    }
}