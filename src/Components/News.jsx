// import React from 'react'

// function News({ info }) {
//     return (
//         <div className='flex flex-col border p-[20px] w-[400px] bg-blue-600 rounded-xl text-white'>

//             <div className='w-[300px]'>

//                 <img  src={info.urlToImage} alt="/noimage.png" />
//             </div>
//             <p>{info.author}</p>
//             <p>{info.content}</p>
//             <a className='text-[13px] opacity-50' target='blank' href={info.url}>Read more...</a>
//         </div>
//     )
// }

// export default News

import React, { useState } from 'react';

function News({ info }) {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div onClick={isPopupOpen == true ? closePopup : openPopup} className='flex flex-col border p-[20px] w-[400px] bg-blue-600 rounded-xl text-white'>

            <div className='w-[300px]'>
                <img src={info.urlToImage} alt="/noimage.png" />
            </div>
            <p>{info.author}</p>
            <p>{info.content}</p>
            <a className='text-[13px] opacity-50' target='_blank' href={info.url}>Read more...</a>

            {isPopupOpen && (
                <div className='text-white fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-6 rounded shadow-lg'>
                     <div className='w-[300px]'>
                <img src={info.urlToImage} alt="/noimage.png" />
            </div>
            <p>{info.author}</p>
            <p>{info.content}</p>
            <a className='text-[13px] opacity-50' target='_blank' href={info.url}>Read more...</a>

                </div>
            )}

            {isPopupOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50' >

                </div>
            )}
        </div>
    );
}

export default News;
