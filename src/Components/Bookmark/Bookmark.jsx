/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Bookmark = ({ bookmarked }) => {
    return (
        <div>
            <div>
                <h1>{bookmarked.question}</h1>
            </div>
        </div>
    );
};

export default Bookmark;