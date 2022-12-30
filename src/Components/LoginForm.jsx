import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAlert } from '../Context/AlertContext'
import { auth } from '../firebaseConfig'


function LoginForm({handleClose}) {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const {setAlert}= useAlert()

    const handleSubmit=()=>{
        if(!email || !password){
            setAlert({
                open: true,
                type: 'warning',
                message: 'fill all details'
            });
            return;
        }

        auth.signInWithEmailAndPassword(email, password)
        .then((respose)=>{ 
            setAlert({
                open: true,
                type: 'success',
                message: 'Login Succesfull'
            });
            handleClose();
        }).catch((err)=>{
            console.log("error", err);
            setAlert({
                open: true,
                type: 'warning',
                message: 'Please Enter Valid Credentials.'
            });
        })
        
    }

  return (
    <Box p={3} style={{display:"flex", flexDirection:'column', gap:"20px"}}>
        <TextField type='email' label='Enter Email'
        onChange={(e)=>setEmail(e.target.value)}></TextField>

        <TextField type='password' label='Enter Password'
        onChange={(e)=>setPassword(e.target.value)}></TextField>

        <Button variant='contained' size='large'
        onClick={handleSubmit}>Login</Button>
    </Box>
  )
}

export default LoginForm