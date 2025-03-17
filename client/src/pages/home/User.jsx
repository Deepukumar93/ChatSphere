import React from 'react';

const User = () => {
    return (
        <div className='flex gap-2 items-center'>
            {/* Corrected className usage */}
            <div className="avatar online">
                <div className="w-9 rounded-full ">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
                </div>
            </div>
            <div>
                <h1 className='line-clamp-1'>Fullname</h1>
                <p className='text-xs'>username</p>
            </div>
        </div>
    );
};

export default User;
