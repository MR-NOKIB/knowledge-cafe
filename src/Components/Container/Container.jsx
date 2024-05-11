/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Container.css'
import Bookmark from '../Bookmark/Bookmark';

const Container = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    const handleAddToBookmark = (blog) => {
        setBookmark(blog);
    }
    return (
        // Main Container
        <div className='cmGrid'>
            {/* Blogs Container */}
            <div className="">
                {
                    blogs.map(blog => <Blog
                        handleAddToBookmark={handleAddToBookmark}
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
            {/* Summary Container*/}
            <div className=''>
                <Bookmark bookmark={bookmark}></Bookmark>
            </div>
        </div>
    );
};

export default Container;