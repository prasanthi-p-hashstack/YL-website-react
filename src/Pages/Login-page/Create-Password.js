import { Button, TextField } from '@mui/material';
import React from 'react'

const CreatePassword = () => {
    return (
        <div className='login-page-wrapper'>
            <div className='login-page-outer-container'>
                <p style={{color:'#666666', fontSize:'20px'}}>To reset your password, please enter your email <br /> address or username below.</p>
                <TextField
                    label='Enter Your Username or Email'
                    sx={{
                        width: { xs: '95%', sm: '600px' }, // 90% width for small screens, 400px for larger screens
                        maxWidth: '100%', // Ensure it doesn’t exceed screen width
                        color:'#666'
                    }}
                />

                <Button variant='contained'>Reset Password</Button>
            </div>
        </div>
    )
}

export default CreatePassword;