import React, { useState } from "react";
import blogData from "../../../Components/Assets/blog-data";
import "./Single-Blog-Post.css"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../Components/Right-SideBar/Right-SideBar";

const SingleBlogPost = () => {
    const { id } = useParams();  // Get the blog post ID from the URL
    const [selectedArchive, setSelectedArchive] = useState(null); // To store selected month-year for filtering
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const sortedBlogs = blogData.data.blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    const recentPosts = sortedBlogs.slice(0, 10);

    // Find the blog post by ID
    const blogPost = blogData.data.blogs.find((post) => post.id === parseInt(id));
    if (!blogPost) {
        return <p>Blog post not found.</p>;
    }

       

    // Filter blogs by selected archive month-year if available, otherwise use all blogs
    const filteredBlogs = selectedArchive
        ? sortedBlogs.filter((blog) => {
            const blogDate = new Date(blog.date);
            const archiveDate = new Date(selectedArchive);
            return (
                blogDate.getMonth() === archiveDate.getMonth() &&
                blogDate.getFullYear() === archiveDate.getFullYear()
            );
        })
        : sortedBlogs;

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

    return (
        <div className="content-width">
            <div className="single-blog-page-outer-container">
                <div className="single-blog-post latest-post">
                    <img src={blogPost.image_url} alt={blogPost.title} />
                    <div className="single-blog-post-date-social-icons">
                        <p className="heavy-weight-blog-post-meta-data">{blogPost.author} | {new Date(blogPost.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: '2-digit',
                            year: 'numeric',
                        })}</p>
                        <div className="heavy-weight-blog-post-social-icons">
                            <img src="/Images/social-icon1.png" alt="" />
                            <img src="/Images/social-icon2.png" alt="" />
                            <img src="/Images/social-icon3.png" alt="" />
                        </div>
                    </div>
                    <h1 className="heavy-weight-blog-post-title">{blogPost.title}</h1>
                    <p className="heavy-weight-blog-post-content">{blogPost.content}</p>

                </div>
                {/* Sidebar Section */}
                <Sidebar 
                    recentPosts={recentPosts}
                    archives={archives}
                    setSelectedArchive={setSelectedArchive}
                    setCurrentPage={setCurrentPage}
                />
                </div>
            </div>
       

    );

}
export default SingleBlogPost;