import React, { useState } from "react";
import "./Heavy-Weight.css"; // Ensure this path is correct
import blogData from "../../Components/Assets/blog-data"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Right-SideBar/Right-SideBar";

const HeavyWeight = () => {
    const sortedBlogs = blogData.data.blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedArchive, setSelectedArchive] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term

    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;

    // Filter blogs by archive or search term
    const filteredBlogs = sortedBlogs.filter((blog) => {
        const blogDate = new Date(blog.date);

        // Filter by selected archive if set
        const matchesArchive = selectedArchive
            ? blogDate.getFullYear() === selectedArchive.getFullYear() &&
              blogDate.getMonth() === selectedArchive.getMonth()
            : true;

        // Filter by search term if set
        const matchesSearch = searchTerm
            ? blog.content.toLowerCase().includes(searchTerm.toLowerCase())
            : true;

        return matchesArchive && matchesSearch;
    });

    // Paginated blog data
    const eachPageBlogData = filteredBlogs.slice(firstIndex, lastIndex);
    const nofPages = Math.ceil(filteredBlogs.length / recordsPerPage);
    const paginationNumbers = [...Array(nofPages + 1).keys()].slice(1);
    const navigate = useNavigate();

    // Get the 10 most recent posts-sidebar
    const recentPosts = sortedBlogs.slice(0, 10);

    // Arrows functionality
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

    // Group blogs by month and year for the archives section
    const archives = {};
    sortedBlogs.forEach((blog) => {
        const blogDate = new Date(blog.date);
        const monthYear = blogDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        if (!archives[monthYear]) {
            archives[monthYear] = [];
        }
        archives[monthYear].push(blog);
    });

    // Update search term based on sidebar input
    const handleSearch = (term) => {
        setSearchTerm(term);
        setCurrentPage(1); // Reset to the first page for search results
    };

    return (
        <div className="content-width">
            <div className="heavy-weight-page-container">
                <div className="heavy-weight-blog-page-section">
                    {eachPageBlogData.map((data, index) => (
                        <div
                            className={`heavy-weight-blog-post-container ${index === 0 ? 'latest-post' : 'regular-post'}`}
                            key={data.id}
                        >
                            <div className="heavy-weight-blog-post">
                                <img src={data.image_url} alt={data.title} />
                                <div className="heavy-weight-blog-post-content">
                                    <div className="heavy-weight-blog-post-date-social-icons">
                                        <p className="heavy-weight-blog-post-meta-data">
                                            {data.author} | {new Date(data.date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: '2-digit',
                                                year: 'numeric',
                                            })}
                                        </p>
                                        <div className="heavy-weight-blog-post-social-icons">
                                            <img src="./Images/social-icon1.png" alt="" />
                                            <img src="./Images/social-icon2.png" alt="" />
                                            <img src="./Images/social-icon3.png" alt="" />
                                        </div>
                                    </div>
                                    <h2 className="heavy-weight-blog-post-title" onClick={() => navigate(`/blog/${data.id}`)}>{data.title}</h2>
                                    <p className="heavy-weight-blog-post-summary">{data.summary}</p>
                                    <a
                                        className="heavy-weight-blog-post-readMore-button"
                                        onClick={() => navigate(`/blog/${data.id}`)}
                                    >
                                        read more
                                    </a>
                                </div>
                            </div>
                            {index !== eachPageBlogData.length - 1 && <hr className="heavy-weight-blog-post-divider" />}
                        </div>
                    ))}
                </div>

                {/* Sidebar Section */}
                <Sidebar 
                    recentPosts={recentPosts}
                    archives={archives}
                    setSelectedArchive={setSelectedArchive}
                    setCurrentPage={setCurrentPage}
                    onSearch={handleSearch} // Pass search handler to Sidebar
                />
            </div>

            {/* Pagination Section */}
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={previousPage}>
                            <img src="./Images/left-arrow.png" alt="left-arrow" className="pagination-left-arrow" />
                        </a>
                    </li>
                    {
                        paginationNumbers.map((number, index) => (
                            <li className={`page-item ${currentPage === number ? "active" : ""}`} key={index}>
                                <a href='#' className="page-link" onClick={() => changeCurrentPage(number)}>
                                    {number}
                                </a>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={nextPage}>
                            <img src="./Images/right-arrow.png" alt="right-arrow" className="pagination-right-arrow" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HeavyWeight;
