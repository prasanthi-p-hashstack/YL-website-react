import { FormControlLabel, Stack, TextField, Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import './login-page.css'
import { useNavigate } from "react-router-dom";
// import { CheckBox } from "@mui/icons-material";

const Register = () => {
    const [userName, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const [firstname, setFirstName] =useState('');
    const [lastname,setLastName] = useState('');
    const [email,setEmail]= useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [isloggedInChecked, setIsloggedInChecked] = useState(false);
    const navigate=useNavigate();

    const handleCheckedButton = (event) => {
        setIsloggedInChecked(event.target.checked)
    }
    console.log(isloggedInChecked);
    const handleLoginButton =()=>{
        if(userName && password && firstname !== ''){
           alert('Registered succesfully');
            navigate('/');
        }
        else{
            alert('Please fill the valid details');
        }
    }

    return <div className="login-page-wrapper ">

        <div className="login-page-outer-container">
            <img src="./Images/web-logo.png" alt="logo"></img>
            <div className="login-form-container">
                <Stack spacing={3} 
                   sx={{
                    width: { xs: '95%', sm: '400px' }, // 90% width for small screens, 400px for larger screens
                    maxWidth: '100%', // Ensure it doesn’t exceed screen width
                }}>
                    <TextField
                        label='Username'
                        size="medium"
                        type='text'
                        value={userName}
                        onChange={(e)=>{setUserName(e.target.value)}}
                        fullWidth
                        required
                        
                    />
                    <TextField
                        label='Firstname'
                        size="medium"
                        type='text'
                        value={firstname}
                        onChange={(e)=>{setFirstName(e.target.value)}}
                        fullWidth
                        required                       
                    />
                      <TextField
                        label='Lastname'
                        size="medium"
                        type='text'
                        value={lastname}
                        onChange={(e)=>{setLastName(e.target.value)}}
                        fullWidth                  
                       
                    />
                     <TextField
                        label='Email'
                        size="medium"
                        type='email'
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        fullWidth                    
                       
                    />
                    <TextField
                        label='Password'
                        size="medium"
                        type='password'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        fullWidth
                        required
                    />
                     <TextField
                        label='Confirm Password'
                        size="medium"
                        type='password'
                        value={confirmPassword}
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                        fullWidth
                        required
                    />
                   
                    <Stack spacing={3} direction='row' sx={{width:'100%'}}>
                        <Button
                            variant="contained"
                            sx={{flexGrow:1,
                                 height:'50px',
                                 textTransform:'none',
                                 fontSize:'15px'                                
                            }}
                            onClick={handleLoginButton}
                        >Register</Button>
                           <Button
                            variant="contained"
                            sx={{width:'50%',
                                textTransform:'none',
                                fontSize:'15px',
                                backgroundColor:'#FFFFFF',
                                color:'#666666'    
                            }}
                            onClick={()=>navigate('/login')}
                        >Login</Button>
                    </Stack>
                    {/* {isLoginSuccessMessage && <p>Logged in successfully</p>} */}
                    
                </Stack>
            </div>
        </div>
    </div>
}
export default Register;