/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Bookmark = ({ bookmarked }) => {
    return (
        <div className='bg-[#FFFFFF] mb-5 rounded'>
            <h1 className='p-4 text-lg font-semibold'>{bookmarked.question}</h1>
        </div>
    );
};

export default Bookmark;
 