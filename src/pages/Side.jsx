import React from 'react';

const Side = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-1'>
                <li><button className='bg-orange-300 p-2 rounded-2xl'>Tech</button></li>
                <li><button className='bg-orange-300 p-2 rounded-2xl '>Programming</button></li>
                <li><button className='bg-orange-300 p-2 rounded-2xl'>Machine learning</button></li>
                <li><button className='bg-orange-300 p-2 rounded-2xl'>New Tech</button> </li>
                <li><button className='bg-orange-300 p-2 rounded-2xl'>Industries News</button></li>
            </div>
        </div>
    );
};

export default Side;