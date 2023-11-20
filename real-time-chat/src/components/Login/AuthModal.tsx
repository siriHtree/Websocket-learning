"use client";
import {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CButton from '../Common/CButton';
interface IAuthModal{
    authToggle:null | string;
    setAuthToggle:any
}



const AuthModal = ({authToggle,setAuthToggle}:IAuthModal) => {
  const [showPassword, setShowPassword] = useState(false);
    const handleClose=()=>{
        setAuthToggle(null)
    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
  return (
    <>
<Modal
open={authToggle===null?false:true}
onClose={handleClose}

>
    <Box className="w-[60vmin] h-[80vmin] bg-white absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <div className="w-full h-full flex flex-col items-center py-8">
        <h1 className='text-clr1 font-normal'>Welcome back</h1>

        <div className='mt-16 w-full flex flex-col items-center'>
          <div className='w-[80%]'>
            {
              authToggle==="SignUp"?<TextField
          label="Enter you Name"
          size='small'
          margin='normal'
          fullWidth
        />:""
            }
           {
              authToggle==="SignUp"?
          <TextField
          label="Enter username"
          size='small'
          margin='normal'
          helperText="provide a unique username"
          fullWidth
        />:""}
         <TextField
          label="Enter you email"
          size='small'
          margin='normal'
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="start"><MailIcon/></InputAdornment>,
          }}
        />
           <TextField
          label="Enter you password"
          type={showPassword ? 'text' : 'password'}
          size='small'
          margin='normal'
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>,
          }}
        />
         {
              authToggle==="SignUp"?
         <TextField
          label="Again Enter password"
          type={showPassword ? 'text' : 'password'}
          size='small'
          margin='normal'
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>,
          }}
        />:""}
          </div>
          <div className='mt-4'>
          <CButton emphasis={true}>{authToggle}</CButton>

          </div>
        
        </div>
       

        </div>
    </Box>

</Modal>
    </>
  )
}

export default AuthModal