/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Container.css'

const Container = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    return (
        // Main Container
        <div className='cmGrid'>
            {/* Blogs Container */}
            <div className="">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
            {/* Summary Container*/}
            <div className=''>

            </div>
        </div>
    );
};

export default Container;