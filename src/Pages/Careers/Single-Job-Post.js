import React, {useState} from "react";
import jobPosts from "../../Components/Assets/job-posts";
import { useParams } from "react-router-dom";
import "./Single-Job-Post.css";
import { Stack, TextField } from "@mui/material";

const SingleJobPostComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [location , setLocation] = useState('');
    const [isResumeAttached, setIsResumeAttached]= useState();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    
    const { id } = useParams();
    console.log(id);

    const singleJobPost = jobPosts.job_posts.find((post) => post.job_id === parseInt(id));
    console.log(singleJobPost);
    if (!singleJobPost) {
        return <p> No Job found.</p>
    }

    const textFieldStyles = {
        '& .MuiOutlinedInput-root': {
            fontSize: '12px',
            borderColor: '#E1E8EB',
            backgroundColor: '#ffffff',
            borderRadius: '4px',
            '&:hover': {
                backgroundColor: '#ffffff',
            },
            '&.Mui-focused': {
                backgroundColor: '#ffffff',
            }
        },
        '& .MuiInputLabel-root': {
            fontSize: '12px',
            lineHeight: '18px',
            color: '#B0B0B0',
        },
        '& .MuiOutlinedInput-input': {
            color: '#051b23',
            backgroundColor: 'transparent',
        },
    };

    const handleApplyButton = () =>{
        if(firstName && lastName && email && jobPosition && location && isResumeAttached){
            setIsFormSubmitted(true);
            }
            else{
                setIsFormSubmitted(false);
                alert('Please fill allthe required feilds')
            }
    }
   

    return (
        <>
            <div className="single-job-post-container content-width">
                <h2 className="single-job-post-title">{singleJobPost.job_title}</h2>
                <div className="single-job-post-detials">
                    <h3 className="single-job-post-details-heading">Job Brief</h3>
                    <p className="single-job-post-details-content">{singleJobPost.job_brief}</p>
                    <h3 className="single-job-post-details-heading">Requirements</h3>
                    <p className="single-job-post-details-content">{singleJobPost.requirements}</p>
                    <h3 className="single-job-post-details-heading">Responsibilities</h3>
                    <p className="single-job-post-details-content">{singleJobPost.responsibilities}</p>
                    <h3 className="single-job-post-details-heading">SkillSets</h3>
                    <p className="single-job-post-details-content">{singleJobPost.skillsets}</p>
                    <h3 className="single-job-post-details-heading">Education</h3>
                    <p className="single-job-post-details-content">{singleJobPost.education}</p>
                    <h3 className="single-job-post-details-heading">Language_Proficiency</h3>
                    <p className="single-job-post-details-content">{singleJobPost.language_proficiency}</p>
                    <div className="single-job-post-additional-details">
                        <h3 className="single-job-post-details-heading">Years of Experience:</h3>
                        <p className="single-job-post-details-content">{singleJobPost.years_of_experience}</p>
                    </div>
                    <div className="single-job-post-additional-details">
                        <h3 className="single-job-post-details-heading">Job Category:</h3>
                        <p className="single-job-post-details-content">{singleJobPost.job_category}</p>
                    </div>
                    <div className="single-job-post-additional-details">
                        <h3 className="single-job-post-details-heading">Job Type:</h3>
                        <p className="single-job-post-details-content">{singleJobPost.job_type}</p>
                    </div>
                    <div className="single-job-post-additional-details">
                        <h3 className="single-job-post-details-heading">Job Location:</h3>
                        <p className="single-job-post-details-content">{singleJobPost.job_type}</p>
                    </div>
                </div>
            </div>
            <div className="single-job-post-application-full-container">
                <div className="single-job-post-application-container content-width">
                    <div className="job-application-left-container">
                        <h2 className="job-application-left-heading">Contact</h2>
                        <div className="job-application-address">
                            <h5>Bengaluru headquarters</h5>
                            <p>No 27. Capstone House,Gangadhar Chetty Rd,
                                Rukmani Colony, Sivanchetti Gardens,
                                Bengaluru,
                                Karnataka 560042</p>
                        </div>
                        <div className="job-application-address">
                            <h5>HR DEPARTMENT</h5>
                            <p>dummy@yantralive.com<br />
                                +91 76762 44444</p>
                        </div>
                    </div>
                    <div className="job-application-right-container responsive-container">
                        <h2 className="job-application-left-heading">Apply Now</h2>
                        <Stack spacing={3}>
                            <Stack spacing={2} direction="row" sx={{ width: '95%' }}>
                                <TextField
                                    label="First name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    size="small"
                                    type="text"
                                    sx={textFieldStyles}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    size="small"
                                    type="text"
                                    sx={textFieldStyles}
                                    fullWidth
                                    required
                                />
                            </Stack>
                            <Stack spacing={2} sx={{ width: '95%' }}>
                                <TextField
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    size="small"
                                    type="email"
                                    sx={textFieldStyles}
                                    fullWidth
                                    required
                                />
                            </Stack>
                            <Stack spacing={2} direction="row" sx={{ width: '95%' }}>
                                <TextField
                                    label="Job Position"
                                    value={jobPosition}
                                    onChange={(e) => setJobPosition(e.target.value)}
                                    size="small"
                                    type="text"
                                    sx={textFieldStyles}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    size="small"
                                    type="text"
                                    sx={textFieldStyles}
                                    fullWidth
                                    required
                                />
                            </Stack>
                            <Stack spacing={2} direction="row" sx={{ width: '95%' }}>
                                <TextField
                                    label="Current CTC"
                                    size="small"
                                    type="text"
                                    sx={textFieldStyles}
                                    fullWidth
                                />
                                <TextField
                                    label="Expected CTC"
                                    size="small"
                                    type="text"
                                    sx={textFieldStyles}
                                    fullWidth
                                />
                            </Stack>
                            <Stack sx={{ width: '95%' }}>
                                <TextField
                                    label="Message"
                                    size="small"
                                    multiline
                                    rows={4}
                                    sx={textFieldStyles}
                                    fullWidth
                                />
                            </Stack>
                        </Stack>
                        <div className="file-upload-container">
                            <input type="file"
                                id="resume-upload"
                                value={isResumeAttached}
                                className="file-upload-input"
                                style={{ display: "none" }}
                                required
                                onChange= {(e) => setIsResumeAttached(e.target.value)}
                                >
                            </input>
                            <label htmlFor="resume-upload" className="file-upload-label">
                                Attach Resume</label>
                                {isResumeAttached && <p>Resume attached succesfully</p>}
                        </div>
                        
                        
                        <button className="job-application-apply-button"
                                onClick={handleApplyButton}
                            >APPLY</button>
                            { isFormSubmitted &&
                            <p className="job-application-apply-button-message">The application is sent succesfully</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleJobPostComponent;
