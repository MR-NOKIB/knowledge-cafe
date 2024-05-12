/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    const handleAddToBookmark = props.handleAddToBookmark;
    const markAsRead = props.markAsRead;
    const { image, id, name, profilePic, time, question } = props.blog;
    return (
        <div className='w-[845px] mb-7 border-b-2 border-b-gray-200'>
            <img className='min-w-[845px] h-[420px] rounded-lg' src={image} alt="" />
            <div className='flex content-center items-center justify-between w-full'>
                <div className='flex content-center items-center gap-5'>
                    <img className='h-[60px] w-[60px] rounded-full mt-5 mb-5' src={profilePic} alt="" />
                    <span>
                        <h4 className=' text-2xl font-semibold'>{name}</h4>
                        <p className='text-sm text-gray-700'>Mar 14(4 Days Ago)</p>
                    </span>
                </div>
                <div>
                    <p>{time} min read <button onClick={() => handleAddToBookmark(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button></p>
                </div>
            </div>
            <h1 className='text-5xl font-semibold leading-relaxed mb-4'>{question}</h1>
            <p className='mb-6 text-sm text-gray-700'>#beginners #programming</p>
            <div className='mb-7'>
                <button className='text-white font-semibold bg-black px-7 py-2 rounded' onClick={()=>markAsRead(props.blog)}>Mark As Read</button>
            </div>
        </div>
    );
};

export default Blog;