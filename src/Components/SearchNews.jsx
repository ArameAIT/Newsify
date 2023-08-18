import React, { useState } from 'react';

function SearchNews({ info }) {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div onClick={isPopupOpen == true ? closePopup : openPopup} className='flex flex-col border p-[20px] w-[400px] bg-blue-600 rounded-xl text-white'>

            <div className='w-full'>
                <img src={info.urlToImage == null ? "/noimage.png" : info.urlToImage} />
            </div>
            <p>{info.author}</p>
            <p>{info.content}</p>
            <div className='flex justify-between items-center'>
                <div>
                    <a className='text-[13px] opacity-50' target='_blank' href={info.url}>Read more...</a>
                </div>
                <div className='flex gap-4'>

                    <div className='w-[40px]'>
                        <img src="/share.png" />
                    </div>
                    <div className='w-[40px]'>
                        <img src="/2701888.webp" />
                    </div>
                </div>
            </div>            {isPopupOpen && (
                <div className='text-white fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-6 rounded shadow-lg'>
                    <div className='w-full'>
                        <img src={info.urlToImage == null ? "/noimage.png" : info.urlToImage} alt="/noimage.png" />
                    </div>
                    <p>{info.author}</p>
                    <p> <span className='opacity-50'>Title</span> : {info.title}</p>
                    <p>{info.content}</p>
                    <p> <span className='opacity-50'>Source </span> : {info.source.name}</p>
                    <p className='text-[13px] opacity-40'>{info.publishedAt}</p>
                    <div className='flex justify-between items-center'>
                        <div>
                            <a className='text-[13px] opacity-50' target='_blank' href={info.url}>Read more...</a>
                        </div>
                        <div className='flex gap-4'>

                            <div className='w-[40px]'>
                                <img src="/share.png" />
                            </div>
                            <div className='w-[40px]'>
                                <img src="/2701888.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isPopupOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50' >

                </div>
            )}
        </div>
    );
}

export default SearchNews;
