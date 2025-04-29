import React from 'react';
import { IoIosSearch } from "react-icons/io";
import User from '../home/User';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../../store/slice/user/user.thunk';

const UserSidebar = () => {

    const { otherUsers } = useSelector(state => state.userReducer)
    // console.log(otherUsers)
    const dispatch = useDispatch();
    const handleLogout = async () => {
        await dispatch(logoutUserThunk());
    };

    return (
        <div className='max-w-[15em] w-full h-screen flex flex-col border-r border-r-white/10'>
            <h1 className='bg-black mx-3 py-2 px-1 text-[#7480ff] text-xl font-semibold rounded-lg mt-3'>
                CHAT SPHERE
            </h1>

            <div className='p-3'>
                <label className="flex items-center gap-2 border border-white/10 rounded-md px-2 py-1">
                    <input
                        type="text"
                        className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
                        placeholder="Search"
                    />
                    <IoIosSearch />
                </label>
            </div>
            <div className="h-full overflow-y-auto px-3 flex flex-col gap-1">
                {otherUsers?.map(userDetails => {
                    // console.log(userDetails);
                    return (
                        <User key={userDetails?._id} userDetails={userDetails} />
                    );
                })}
            </div>
            <div className='flex justify-between items-center p-2'>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2 overflow-hidden">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="User Avatar"
                        />
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="btn btn-primary btn-sm px-4"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserSidebar;
