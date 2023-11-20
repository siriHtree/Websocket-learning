"use client";
import {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

interface IAuthModal{
    authToggle:null | string;
    setAuthToggle:any
}



const AuthModal = ({authToggle,setAuthToggle}:IAuthModal) => {
    const handleClose=()=>{
        setAuthToggle(null)
    }
    
  return (
    <>
<Modal
open={authToggle===null?false:true}
onClose={handleClose}

>
    <Box className="w-[60vmin] h-[80vmin] bg-white absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <div className="w-full h-full flex flex-col items-center py-8">
        <h1>Welcome back</h1>
        <div className='mt-4'>
        <TextField
          label="Name"
          size='small'
          margin='dense'
        //   InputProps={{
        //     endAdornment: <InputAdornment position="start">kg</InputAdornment>,
        //   }}
        />
        </div>
       

        </div>
    </Box>

</Modal>
    </>
  )
}

export default AuthModal