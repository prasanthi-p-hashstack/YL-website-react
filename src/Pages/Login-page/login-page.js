import { FormControlLabel, Stack, TextField, Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import './login-page.css'
import { useNavigate } from "react-router-dom";
// import { CheckBox } from "@mui/icons-material";

const Loginpage = () => {
    const [userName, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const [isLoginSuccessMessage, setIsLoginSuccessMessage] = useState(false)
    const [isloggedInChecked, setIsloggedInChecked] = useState(false);
    const navigate=useNavigate();
    const [isMobile, setIsMobile]= useState();

    const handleCheckedButton = (event) => {
        setIsloggedInChecked(event.target.checked)
    }
    console.log(isloggedInChecked);
    const handleLoginButton =()=>{
        if(userName && password !== ''){
           alert('logged in succesfully');
            navigate('/');
        }
        else{
            alert('Please fill the valid details')
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
                        label='Username or Email'
                        size="medium"
                        type='text'
                        value={userName}
                        onChange={(e)=>{setUserName(e.target.value)}}
                        fullWidth
                        required
                        sx={{ Width: '400px' }}
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
                    <FormControlLabel
                        label='Keep me logged in'
                        sx={{color:"#666666"}}
                        control={
                            <Checkbox
                                checked={isloggedInChecked}
                                onChange={handleCheckedButton}                           
                                
                            />
                        }
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
                        >Login</Button>
                           <Button
                            variant="contained"
                            sx={{width:'50%',
                                textTransform:'none',
                                fontSize:'15px',
                                backgroundColor:'#FFFFFF',
                                color:'#666666'    
                            }}
                            onClick={()=>navigate('/register-user')}
                        >Register</Button>
                    </Stack>
                    {/* {isLoginSuccessMessage && <p>Logged in successfully</p>} */}
                    <a href="" className="login-forget-password-button" onClick={()=>navigate('/reset-password')} >Forgot Your Password?</a>
                </Stack>
            </div>
        </div>
    </div>
}
export default Loginpage;