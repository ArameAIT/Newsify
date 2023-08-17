import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div >

            <div className='flex justify-between items-center m-[20px] border-b'>
                <Link to={""}>
                    <button className='text-[40px] font-semibold text-blue-600'>Newsify</button>
                </Link>

                <Link to={"/saved"}>
                    <img src="/2701888.webp" className='w-[100px]' />
                </Link>
            </div>
            <div className='flex justify-center items-center'>
                <input type="text" name="for-search" id="for-search" className='bg-gray-200 rounded-2xl' />
                <Link to={"search"}>
                    <button className='ml-[10px] border p-[10px] rounded-2xl bg-blue-600 text-white' >Search</button>
                </Link>
            </div>
        </div>
    )
}

export default Header