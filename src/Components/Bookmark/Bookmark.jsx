/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Bookmark = ({ bookmark }) => {
    return (
        <div>
            <div className='border-2 border-blue-600 text-blue-700 text-xl font-bold rounded px-10 py-5'>
                <h4>Spent Time On Read: { } min</h4>
            </div>
            <div>
                <h1>{bookmark.question}</h1>
            </div>
        </div>
    );
};

export default Bookmark;