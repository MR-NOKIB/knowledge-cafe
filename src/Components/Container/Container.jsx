/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Container.css'
import Bookmark from '../Bookmark/Bookmark';
import { Qna } from '../QnaAcordion/Qna';

const Container = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [timeToRead, setTimeToRead] = useState(0)

    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [setBookmarks]);

    const handleAddToBookmark = (blog) => {
        const newBookmarks = [...bookmarks, blog]
        setBookmarks(newBookmarks);
    };
    const markAsRead = (blog) => {
        setTimeToRead(prevTime => prevTime + blog.time)
    }

    return (
        // Main Container
        <div className='cmGrid'>
            {/* Blogs Container */}
            <div className="">
                {
                    blogs.map(blog => <Blog
                        handleAddToBookmark={handleAddToBookmark}
                        markAsRead={markAsRead}
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
            {/* Summary Container*/}
            <div className=''>
                <div className='border-2 border-blue-600 text-blue-700 text-xl font-bold rounded px-10 py-5 mb-7 sticky top-0 bg-white'>
                    <h4>Spent Time On Read: { timeToRead } min</h4>
                </div>
                <div className='bg-[#1111110d] rounded p-7'>
                    <h4 className='text-xl font-semibold text-center mb-5'>Bookmarked Blogs: {bookmarks.length}</h4>
                    {
                        bookmarks.map((bookmarked, index) => <Bookmark
                            key={index + 1}
                            bookmarked={bookmarked}
                        ></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Container;