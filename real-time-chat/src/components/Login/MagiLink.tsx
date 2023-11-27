import React from 'react';
import {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';
import CButton from '../Common/CButton';
import axios from 'axios';

const MagiLink = ({open, setOpen}:any) => {
    const [email,setEmail]=useState("")
    const handleClose=()=>{
        setOpen(!open)
    }
    const sendMagicLink=async()=>{
     try{
      let res=await axios.post("http://localhost:4000/api/v1/auth/magic-login",{email});
      console.log(res)

     }catch(err){
       console.log(err)
     }
    }
  return (
    <Modal
open={open}
onClose={handleClose}

>

    <Box className="w-[60vmin] h-[40vmin] bg-white absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col items-center justify-center">
        <div className="w-[80%] h-full flex flex-col items-end justify-center py-8">
        <TextField
          label="Enter you email"
          size='small'
          margin='normal'
          value={email}
          onChange={(e:any)=>(setEmail(e.target.value))}
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="start"><MailIcon/></InputAdornment>,
          }}
        />
        <CButton emphasis={true} buttonAttributes={{onClick:sendMagicLink}}>Send Link</CButton>


       
       

        </div>
    </Box>

</Modal>
  )
}

export default MagiLink