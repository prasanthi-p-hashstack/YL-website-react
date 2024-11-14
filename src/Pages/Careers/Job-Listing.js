import React, { useState } from "react";
import "./Job-Listing.css";
import jobPosts from "../../Components/Assets/job-posts";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


const JobListing = () => {

    const [selectLocation, setSelectLocation] = useState('');
    const [selectJobType, setSelectJobType] = useState('');
    const [selectJobTitle, setSelectJobTitle] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const jobLocations = [...new Set(jobPosts.job_posts.map(post => post.job_location))];
    const jobTypes = [...new Set(jobPosts.job_posts.map(post => post.job_type))];
    const jobTitles = [...new Set(jobPosts.job_posts.map(post => post.job_title))];

    const filteredJobs = jobPosts.job_posts.filter(post => {
        const locationMatch = selectLocation ? post.job_location.toLowerCase() === selectLocation.toLowerCase() : true;
        const jobTypeMatch = selectJobType ? post.job_type.toLowerCase() === selectJobType.toLowerCase() : true;
        const titleMatch = selectJobTitle ? post.job_title.toLowerCase().includes(selectJobTitle.toLowerCase()) : true;

        return locationMatch && jobTypeMatch && titleMatch;
    });

    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;

    const eachPageJobPosts = filteredJobs.slice(firstIndex, lastIndex);
    const nofPages = Math.ceil(filteredJobs.length / recordsPerPage);
    const paginationNumbers = [...Array(nofPages + 1).keys()].slice(1);

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const nextPage = () => {
        if (currentPage !== nofPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const changeCurrentPage = (id) => {
        setCurrentPage(id);
    };

    const handleSingleJobPost = (id) => {
        navigate(`job/${id}`);
    }

    return (
        <div className="career-page-job-listing-outer-container">
            <div className="career-page-job-listing-container content-width">
                <div className="job-listing-heading-container">
                    <h3 className="job-listing-heading">Current Openings</h3>
                    <div className="job-listing-heading-search-filter">
                        <Autocomplete
                            options={jobLocations}
                            value={selectLocation}
                            onChange={(event, newLocation) => setSelectLocation(newLocation || '')}
                            size='small'
                            sx={{
                                width: '180px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ACD0DA' },
                                    '&:hover fieldset': { borderColor: '#014A60' },
                                    '& .MuiAutocomplete-endAdornment .MuiSvgIcon-root': { color: '#FFC629' },
                                },
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label="Job Location" variant="outlined" />
                            )}
                        />
                        <Autocomplete
                            options={jobTypes}
                            value={selectJobType}
                            onChange={(event, newJobType) => setSelectJobType(newJobType || '')}
                            size='small'
                            sx={{
                                width: '150px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#ACD0DA' },
                                    '&:hover fieldset': { borderColor: '#014A60' },
                                    '& .MuiAutocomplete-endAdornment .MuiSvgIcon-root': { color: '#FFC629' },
                                },
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label="Job Type" variant="outlined" />
                            )}
                        />
                        <TextField
                            type="search"
                            className="job-listing-heading-container-search"
                            placeholder="Search"
                            size="small"
                            value={selectJobTitle}
                            onChange={(e) => setSelectJobTitle(e.target.value)} // Added onChange here
                        />
                    </div>
                </div>
                <div className="job-listing-post-container">
                    {eachPageJobPosts.map((data, index) => (
                        <div className="job-post-details-container" key={index}>
                            <div className="job-listing-title">{data.job_title}</div>
                            <div className="job-listing-job-details1">
                                <img src="./Images/careers/job-type.png" alt="job-type" />
                                {data.job_type}
                            </div>
                            <div className="job-listing-job-details2">
                                <img src="./Images/careers/job-location.png" alt="job-location" />
                                {data.job_location}
                            </div>
                            <button className="job-listing-view-details-button" onClick={() => handleSingleJobPost(data.job_id)}>
                                VIEW DETAILS
                            </button>
                        </div>
                    ))}
                </div>
                <nav>
                    <ul className="pagination careers">
                        <li className="page-item">
                            <button className="page-link" onClick={previousPage}>
                                <img src="./Images/left-arrow.png" alt="left-arrow" className="pagination-left-arrow" />
                            </button>
                        </li>
                        {paginationNumbers.map((number, index) => (
                            <li className={`page-item ${currentPage === number ? "active" : ""}`} key={index}>
                                <button className="page-link" onClick={() => changeCurrentPage(number)}>
                                    {number}
                                </button>
                            </li>
                        ))}
                        <li className="page-item">
                            <button className="page-link" onClick={nextPage}>
                                <img src="./Images/right-arrow.png" alt="right-arrow" className="pagination-right-arrow" />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="job-listing-background-vector">
                <img src="./Images/careers/careers-background-vector.png" alt='background-vector' />
            </div>
        </div>
    );
}

export default JobListing;
