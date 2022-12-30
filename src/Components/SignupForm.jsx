import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAlert } from '../Context/AlertContext'
import { auth } from '../firebaseConfig'

function SignupForm({handleClose}) {
        const [email, setEmail]= useState('')
        const [password, setPassword]= useState('')
        const [confirmPassword, setConfirmPassword]= useState('')
        const {setAlert} = useAlert();

const handleSubmit=()=>{
    if(!email || !password || !confirmPassword){
        setAlert({
            open: true,
            type: 'warning',
            message: 'Fill all Details.'
        });
    }
    if(password!==confirmPassword){
        setAlert({
            open: true,
            type: 'warning',
            message: 'Password MissMatch.'
        });
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((respose)=>{ 
        setAlert({
            open: true,
            type: 'success',
            message: 'SignUp Succesfull'
        });
        handleClose();
    }).catch((err)=>{
        console.log("error", err);
        setAlert({
            open: true,
            type: 'warning',
            message: 'Please Enter Valid Main Id and Password is more than 6 characters.'
        });
    })
    
}

return (
<Box p={3} style={{display:"flex", flexDirection:'column', gap:"20px"}}>
    <TextField type='email' label='Enter Email'
    onChange={(e)=>setEmail(e.target.value)}></TextField>

    <TextField type='password' label='Enter Password'
    onChange={(e)=>setPassword(e.target.value)}></TextField>

   <TextField type='password' label='Enter Confirm Password'
    onChange={(e)=>setConfirmPassword(e.target.value)}></TextField>

    <Button variant='contained' size='large'
    onClick={handleSubmit}>SignUp</Button>
</Box>
  )
}

export default SignupForm