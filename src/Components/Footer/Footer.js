import React, { useState } from 'react'
import { Stack, TextField } from "@mui/material";
import './Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    
    const handleFormSubmit =()=>{
        if (firstName && lastName && email && company)
            {
                setIsFormSubmitted(true);
        
            }else{
                alert('Fill all the required fields');
            }
      
    }

    const textFieldStyles = {
        '& .MuiOutlinedInput-root': {
            fontSize: '12px', // Set input font size
            borderColor: '#E1E8EB', // Set border color
            backgroundColor: '#ffffff', // Set background color for the input field container
            borderRadius: '4px', // Set border radius

            // Ensure background color stays the same on hover and focus
            '&:hover': {
                backgroundColor: '#ffffff', // Keep the background white when hovering
            },
            '&.Mui-focused': {
                backgroundColor: '#ffffff', // Keep the background white when focused
            }
        },
        '& .MuiInputLabel-root': {
            fontSize: '12px',
            lineHeight: '18px',
            color: '#B0B0B0', // Set label color
        },
        '& .MuiOutlinedInput-input': {
            color: '#051b23', // Set input text color
            backgroundColor: 'transparent', // Ensure inner input has transparent background if needed
        },
    };

    return (
        <div className='footer-outer-container'>
            {/* footer-address-container */}
            <div className='footer-address-contanctForm-container content-width'>
                <div className='footer-address-contanctForm-left-container'>
                    <h2 className="footer-address-heading">Get in touch</h2>
                    <div className="footer-left-content-address">
                        <h5>Bengaluru headquarters</h5>
                        <p>No 27. Capstone House, Gangadhar Chetty Rd,<br />
                            Rukmani Colony, Sivanchetti Gardens,<br />
                            Bengaluru,<br />
                            Karnataka 560042</p>
                    </div>
                    <div className="footer-left-content-address">
                        <h5>middle east fze</h5>
                        <p>Building LOB10, Office No. LOB10G026,Jebel Ali Freezone,<br /> Dubai – UAE</p>
                    </div>
                    <div className="footer-left-content-address">
                        <h5>contact us</h5>
                        <p>sales@yantralive.com<br />
                            +91 76762 44444</p>
                    </div>
                </div>
                <div className='footer-address-contanctForm-right-container'>
                    <h2 className="footer-address-heading">Send us a message</h2>
                    <Stack spacing={3}>  {/* This Stack will manage the spacing between the two child Stacks */}

                        <Stack spacing={3} direction="row" sx={{ width: '100%' }}>
                            <TextField
                                label="First name"
                                value={firstName}
                                onChange={(e)=>setFirstname(e.target.value)}
                                size="small"
                                type="text"
                                sx={textFieldStyles} // Apply the shared styles
                                fullWidth // Ensures it takes full width
                                required
                            />
                            <TextField
                                label="Last name"
                                value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                                size="small"
                                type="text"
                                sx={textFieldStyles} // Apply the shared styles
                                fullWidth // Ensures it takes full width
                                required
                            />
                        </Stack>

                        <Stack spacing={3} sx={{ width: '100%' }}>
                            <TextField
                                label="Email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                size="small"
                                type="email"
                                sx={textFieldStyles}
                                fullWidth // Ensures it takes full width
                                required
                            />
                        </Stack>

                        <Stack spacing={3} sx={{ width: '100%' }}>
                            <TextField
                                label="Company"
                                value={company}
                                onChange={(e)=>setCompany(e.target.value)}
                                size="small"
                                type="text"
                                sx={textFieldStyles}
                                fullWidth // Ensures it takes full width
                                required
                            />
                        </Stack>


                        {/* Stack for Message */}
                        <Stack sx={{ width: '100%' }}>
                            <TextField
                                label="Message"
                                value={message}
                                onChange={(e)=>setMessage(e.target.value)}
                                size="small"
                                multiline // Makes the TextField behave like a textarea
                                rows={4} // Controls how many rows tall the textarea will be
                                sx={textFieldStyles} // Apply the shared styles
                                fullWidth // Ensures it takes full width
                            />
                        </Stack>
                    </Stack>

                    <button className="form-submit-button"
                        onClick={handleFormSubmit}
                    >submit</button>
                    {isFormSubmitted &&
                        <p className='footer-submit-button-success-message'>
                            Form is submitted successfully</p>
                    }
                </div>
            </div>



            {/* footer menu container */}
            <div className='footer-menu-outer-container'>
                <div className='footer-menu-container content-width'>
                    <div className='footer-menu-logo'>
                        <img src="./Images/footer-logo.png" alt='footer-logo'></img>
                    </div>
                    <div className='footer-menu-lists'>
                        <ul className='footer-menu-each-list'>
                            <li onClick={() => navigate('/equipment')}>EQUIPMENT</li>
                            <li onClick={() => navigate('/shop')}>SHOP </li>
                            <li onClick={() => navigate('')}>USED EQUIPMENT</li>
                        </ul>
                        <ul className='footer-menu-each-list'>
                            <li onClick={() => navigate('/parts')}>Parts</li>
                            <li>catalogue</li>
                            <li onClick={() => navigate('/careers')}>careers</li>
                        </ul>
                        <ul className='footer-menu-each-list'>
                            <li onClick={() => navigate('/fleet')}>Fleet</li>
                            <li onClick={() => navigate('/services')}>services</li>
                        </ul>
                        <ul className='footer-menu-each-list'>
                            <li onClick={() => navigate('/about')}>About</li>
                            <li onClick={()=>navigate('/categories')}>catagories</li>
                        </ul>
                        <ul className='footer-menu-each-list'>
                            <li onClick={() => navigate('/heavy-weight')}>HeavyWeight</li>
                            <li>offer zone</li>
                        </ul>
                    </div>

                    <div className='footer-enquire-form'>
                        <a href=''
                            alt='footer-enquire-button'
                        >ENQUIRE
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <hr className='footor-hr-tag content-width' />
                <p className='footer-copyright content-width'>© 2023 YantraLive. All rights reserved.</p>
            </div>
        </div>

    )
}

export default Footer;
