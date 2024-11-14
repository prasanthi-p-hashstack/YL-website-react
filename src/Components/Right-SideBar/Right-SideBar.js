import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Right-SideBar.css";
import { TextField } from "@mui/material";

const Sidebar = ({ recentPosts, archives, setSelectedArchive, setCurrentPage, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleReadMoreButton = (id) => {
        navigate(`/blog/${id}`);
    };

    const handleArchiveClick = (monthYear) => {
        const [month, year] = monthYear.split(" ");
        const archiveDate = new Date(`${month} 1, ${year}`);
        setSelectedArchive(archiveDate);
        setCurrentPage(1);
    };

    const handleSearchInput = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term); // Pass the search term up to HeavyWeight
    };

    return (
        <div className="heavy-weight-page-sidebar">
            <div className="sidebar-search">
                <TextField
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchInput}
                    size='small'
                />
            </div>

            <div className="sidebar-recent-posts-container">
                <h3>Recent Posts</h3>
                {recentPosts.map((recentPostData) => (
                    <ul className="siderbar-recent-posts" key={recentPostData.id}>
                        <li
                            className="recent-posts-title"
                            onClick={() => handleReadMoreButton(recentPostData.id)}
                        >
                            {recentPostData.title}
                        </li>
                    </ul>
                ))}
            </div>

            <div className="sidebar-archives-container">
                <h3>Archives</h3>
                <ul>
                    {Object.keys(archives).map((monthYear, index) => (
                        <li
                            key={index}
                            className="sidebar-archives"
                            onClick={() => handleArchiveClick(monthYear)}
                        >
                            {monthYear}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
