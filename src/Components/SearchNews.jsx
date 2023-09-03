import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSaves, selectSaves } from '../store/slices/Saves';

function SearchNews({ info }) {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const saves = useSelector(selectSaves)

    const dispatch = useDispatch()

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };
    const forExample = () => {
        return 1;
    };
    function handleSave() {

        setIsSaved(prev => !prev)
        const updatedSaves = isSaved
            ? saves.filter(save => save.url !== info.url)
            : [...saves, info];

        dispatch(handleSaves({ elem: updatedSaves }));
    }
    //
    return (
        <div onClick={isPopupOpen == true ? closePopup : forExample} className='flex flex-col border p-[20px] w-[400px] bg-blue-600 rounded-xl text-white'>

            <div onClick={isPopupOpen == true ? closePopup : openPopup} className='w-full'>
                <img src={info.urlToImage == null ? "/noimage.png" : info.urlToImage} />
            </div>
            <div onClick={isPopupOpen == true ? closePopup : openPopup}>

                <p>{info.author}</p>
                <p>{info.content}</p>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <a className='text-[13px] opacity-50' target='_blank' href={info.url}>Read more...</a>
                </div>
                <div className='flex gap-4'>

                    <div className='w-[40px]'>
                        <img src="/share.png" />
                    </div>
                    <div className={`w-[45px] cursor-pointer flex justify-center  `}>
                        {isSaved == true ? (

                            <img onClick={handleSave} src="BlackImage.png" className='' />
                        ) : (
                            <img onClick={handleSave} src="/WhiteSave.png" className='p-[5px]' />
                        )}
                    </div>
                </div>
            </div>
            {isPopupOpen && (
                <div onClick={isPopupOpen == true ? closePopup : openPopup} className='text-white fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-6 rounded shadow-lg'>
                    <div className='w-full'>
                        <img src={info.urlToImage == null ? "/noimage.png" : info.urlToImage} alt="/noimage.png" />
                    </div>
                    <div onClick={isPopupOpen == true ? closePopup : openPopup}>

                        <p>{info.author}</p>
                        <p> <span className='opacity-50'>Title</span> : {info.title}</p>
                        <p>{info.content}</p>
                        <p> <span className='opacity-50'>Source </span> : {info.source.name}</p>
                        <p className='text-[13px] opacity-40'>{info.publishedAt}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <a className='text-[13px] opacity-50' target='_blank' href={info.url}>Read more...</a>
                        </div>
                        <div className='flex gap-4'>

                            <div className='w-[40px]'>
                                <img src="/share.png" />
                            </div>
                            <div className={`w-[45px] cursor-pointer flex justify-center  `}>
                                {isSaved == true ? (

                                    <img onClick={handleSave} src="BlackImage.png" className='' />
                                ) : (
                                    <img onClick={handleSave} src="/WhiteSave.png" className='p-[5px]' />
                                )}
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
