import React from 'react'
import { IoIosSearch } from "react-icons/io";
import User from '../home/User';

const UserSidebar = () => {
    return (
        <div className='max-w-[15em] w-full h-screen flex flex-col '>
            <h1 >CHAT SPHERE</h1>
            <div className='p-3'>
                <label className="flex items-center gap-2 border border-white rounded-md px-2 py-1">
                    <input 
                        type="text" 
                        className="w-full bg-transparent border-none focus:outline-none focus:ring-0" 
                        placeholder="Search" 
                    />
                    <IoIosSearch />
                </label>
            </div>
            <div className='h-full overflow-y-auto px-3'>
                {Array(20).fill(<User />)}
            </div>
            <div className='h-[3rem] bg-black'></div>
        </div>
    )
}

export default UserSidebar;
