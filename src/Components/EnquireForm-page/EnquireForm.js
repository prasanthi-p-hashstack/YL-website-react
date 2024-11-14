import React, {useState, useEffect} from 'react';
import './EnquireForm.css';
import { Stack, TextField } from "@mui/material";

const EnquireForm = () => {
    const backgroundEnquireForm = './Images/background-enquireform.png';
    const [currentIndex, setCurrentIndex]= useState(0);
    const [fullName, setFullName] = useState('');
    const [phonenumber, setPhoneNumber]=useState('');
    const [message, setMessage]= useState('');
    const [location, setLocation] = useState('');
    const [company, setCompany] = useState('');
    const [ isFormSubmitted, setIsFormSubmitted] = useState('');

    const enquireBackgroundStyles = {
        backgroundImage: `url(${backgroundEnquireForm})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    
    
    const slidingText = [
        'One Stop Shop For All Your Service Requirements',        
        'Professional Technical Service For Your Construction Equipment',
        'Maximize Your Equipment Uptime With Yantralive Services',
        'Fully Transparent Pricing',
    ]

     useEffect(() => {
        // Set a timeout to update the index after 3 seconds (animation duration)
        const timeout = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slidingText.length);
        }, 3000); // Match this to the animation duration

        return () => clearTimeout(timeout); // Clear timeout on component unmount
    }, [currentIndex]); // Run effect every time currentIndex changes

    

    // enquire-form related code
    const textFieldStyles = {
        '& .MuiOutlinedInput-root': {
            fontSize: '12px', // Set input font size
            borderColor: '#E1E8EB', // Set border color
            backgroundColor: '#ffffff', // Set background color for the input field container
            borderRadius: '8px', // Set border radius

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

    const handleFormSubmit =()=>{
        if (fullName && company)
            {
                setIsFormSubmitted(true);
        
            }else{
                alert('Fill all the required fields');
            }
      
    }


    return (
        <div
            className='enquire-form-page-outer-container'
            style={enquireBackgroundStyles} >
                <div className='enquire-form-container '>
            <div className='enquire-form-left-container'>
                <p className='enquire-form-each-slide'>{slidingText[currentIndex]}</p>
            </div>
            <div className='enquire-form-right-container'>
                <div className='enquire-form-background-container'>
                <h2 className="footer-address-heading">Enquiry</h2>
                    <Stack spacing={3}>  {/* This Stack will manage the spacing between the two child Stacks */}

                    <Stack spacing={3} sx={{ width: '100%' }}>
                            <TextField
                                label="Name"
                                value={fullName}
                                onChange={(e)=>setFullName(e.target.value)}
                                size="small"
                                type="text"
                                sx={textFieldStyles}
                                fullWidth // Ensures it takes full width
                                required
                            />
                        </Stack>
                        <Stack spacing={3} sx={{ width: '100%' }}>
                            <TextField
                                label="PhoneNumber"
                                value={phonenumber}
                                onChange={(e)=>setPhoneNumber(e.target.value)}
                                 size="small"
                                type="number"
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
                        <Stack spacing={3} sx={{ width: '100%' }}>
                            <TextField
                                label="Location"
                                value={location}
                                onChange={(e)=>setLocation(e.target.value)}
                                  size="small"
                                type="text"
                                sx={textFieldStyles}
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
            </div>
            </div>
       
    );
};

export default EnquireForm;
