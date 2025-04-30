import React, { useEffect } from 'react'
import User from './User'
import Message from './Message'
import { IoMdSend } from "react-icons/io";
import { useDispatch,useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { getMessageThunk } from '../../store/slice/message/message.thunk';

const MessageContainer = () => {

  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);

useEffect(() => {
  if (!selectedUser?._id) return;

  dispatch(getMessageThunk({ receiverId: selectedUser?._id }));
}, [selectedUser]);


  return (
    <div className="h-screen w-full flex flex-col">
      <div className=" p-2 border-b border-b-white/10">
        <User userDetails={selectedUser}/>
      </div>
      <div className='h-full overflow-y-auto'>
        <Message />
        
      </div>
      <div>
        <div className="w-full p-3 flex gap-2">
          <input
            type="text"
            placeholder="Type here....."
            className="input input-bordered input-primary w-full "
          />
          
          <button class="btn btn-square btn-outline bg-primary">
          <IoMdSend />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessageContainer
