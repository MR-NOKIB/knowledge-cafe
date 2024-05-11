/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Container.css'
import Bookmark from '../Bookmark/Bookmark';

const Container = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [setBookmarks]);
    const handleAddToBookmark = (blog) => {
        const newBookmarks =  [...bookmarks,blog]
        setBookmarks(newBookmarks);
    };
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
            <div className='border-2 border-blue-600 text-blue-700 text-xl font-bold rounded px-10 py-5'>
                <h4>Spent Time On Read: { } min</h4>
            </div>
                {
                    bookmarks.map((bookmarked, index) => <Bookmark
                     key={index + 1}
                     bookmarked={bookmarked}
                     ></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Container;