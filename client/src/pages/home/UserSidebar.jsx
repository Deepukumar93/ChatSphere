import React from 'react'
import { IoIosSearch } from "react-icons/io";
import User from '../home/User';
import { useDispatch } from 'react-redux';
import { logoutUserThunk } from '../../store/slice/user/user.thunk';

const UserSidebar = () => {

    const dispatch = useDispatch();
    const handleLogout = async()=>{
        await dispatch(logoutUserThunk())
    }
    return (
        <div classNameName='max-w-[15em] w-full h-screen flex flex-col border-r border-r-white/10'>
            <h1 classNameName='bg-black mx-3 py-2 px-1 text-[#7480ff] text-xl font-semibold rounded-lg mt-3' >CHAT SPHERE</h1>
            <div classNameName='p-3'>
                <label classNameName="flex items-center gap-2 border border-white/10 rounded-md px-2 py-1">
                    <input
                        type="text"
                        className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
                        placeholder="Search"
                    />
                    <IoIosSearch />
                </label>
            </div>
            <div classNameName='h-full overflow-y-auto px-3'>
                {Array(5).fill(<User />)}
            </div>
            <div classNameName='flex justify-between items-center p-2'>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <button onClick={handleLogout} className="btn btn-primary btn-sm px-4">logout</button>
            </div>
        </div>
    )
}

export default UserSidebar;
