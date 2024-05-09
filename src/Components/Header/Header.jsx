/* eslint-disable no-unused-vars */

import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between content-center items-center border-b-2 border-b-gray-200 mb-5 pb-7'>
                <h1 className='text-4xl font-semibold'>Knowledge Cafe</h1>

                <img className='rounded-full h-[60px] w-[60px]' src="https://img.freepik.com/free-photo/portrait-cheerful-handsome-man-keeps-hands-together-smiles-broadly-dressed-elegant-shirt_273609-16601.jpg?t=st=1715168035~exp=1715171635~hmac=fbe92f4f7f09e7b727b2d2afc7604b7c290c2cb83eaa2a5e2dac39425922e274&w=996" alt="" />
            </div>
        </div>
    );
};

export default Header;