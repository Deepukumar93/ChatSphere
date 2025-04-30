// import React, { useEffect } from 'react'
import User from './User'
import Message from './Message'
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMessageThunk } from '../../store/slice/message/message.thunk';

const MessageContainer = () => {

  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messageReducer);
  console.log(messages)

  useEffect(() => {
    if (selectedUser?._id) {
      dispatch(getMessageThunk({ receiverId: selectedUser?._id }));
    }
  }, [selectedUser]);


  return (
    <>
      {!selectedUser ? (
        <p>please select user</p>
      ) : (
        <div className="h-screen w-full flex flex-col">
          <div className=" p-2 border-b border-b-white/10">
            <User userDetails={selectedUser} />
          </div>
          <div className='h-full overflow-y-auto'>
            {messages?.map((messageDetails) => {
              return <Message key={messageDetails?._id} messageDetails={messageDetails} />;
            })}


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
      )}
    </>
  )
}

export default MessageContainer
