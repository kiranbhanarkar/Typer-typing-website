import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Modal, Tab, Tabs } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

// const useStyles = makeStyles(()=>({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backdropFilter: 'blur(2px)'
//     },
//     box: {
//         width: 400,
//         textAlign: 'center'
//     }
// }))
function AccountIcon() {
    const [open, setOpen] = useState(false);
    const [value, setValue]= useState(0);

    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const handleValueChange=(e,v) =>{
        setValue(v);
    }

    // const classes = useStyles();
    
  return (
    <div>
    <PersonIcon onClick={handleOpen}/>
        <Modal open={open} onClose={handleClose} style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(2px)',
        lableColor:'white'}}>
            <div style={{width:'400px',textAlign: 'center'}}>
            <AppBar position='static' style={{backgroundColor:'transparent'}}>
                <Tabs value={value} onChange={handleValueChange} variant='fullWidth'>
                    <Tab label='login'>login</Tab>
                    <Tab label='signup'>signup</Tab>
                </Tabs>
            </AppBar>
            {value===0 && <LoginForm/>}
            {value===1 && <SignupForm/>}
            </div>
        </Modal>
    </div>
  )
}

export default AccountIcon