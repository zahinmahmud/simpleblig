import React from 'react';
 import { FaCommentAlt, FaFacebook, FaPhoneAlt, FaTelegramPlane, FaTrophy, FaTwitter, FaVoicemail, FaYoutube, } from "react-icons/fa";
const TopHeader = () => {
    return (
        <div className='  mx-auto flex items-center justify-evenly  bg-amber-500'>
            <div className=' flex gap-2 p-2 md:p-4 text-white text-2xl'  >
               <p className=' hover:text-blue-600'><FaFacebook /></p>
               <p className=' hover:text-red-600'><FaYoutube /></p>
                <p className=' hover:text-sky-600'><FaTwitter /></p>
                <p className=' hover:text-sky-300'><FaTelegramPlane/></p>
            </div>
            <div className=' hidden lg:flex items-center gap-4 m-4   '>
                <p className='text-xl text-white font-extrabold hover:text-blue-700 items-center flex gap-2'><span className='text-neutral-400'><FaTrophy /></span>Success Story</p>
                <p className='text-xl text-white font-extrabold hover:text-blue-700 items-center flex gap-2'><span className='text-neutral-400'><FaPhoneAlt /></span>Call Us</p>
                <p className='text-xl text-white font-extrabold hover:text-blue-700  items-center flex gap-2'> <span className='text-neutral-400'><FaCommentAlt/></span>Contact Us</p>
            </div>
        </div>
    );
};

export default TopHeader;