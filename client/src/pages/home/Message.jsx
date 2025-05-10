import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Message = ({ messageDetails }) => {
  const { userProfile, selectedUser } = useSelector((state) => state.userReducer);

  const messageRef = useRef(null); // correct variable name

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const isSender = userProfile?._id === messageDetails?.senderId;

  return (
    <>
      <div
        ref={messageRef}
        className={`chat ${isSender ? 'chat-end' : 'chat-start'}`}
      >
        <div className="chat-image avatar">
          <div className="w-12 rounded-full mr-4">
            <img
              alt="User Avatar"
              src={
                isSender
                  ? userProfile?.avatar
                  : selectedUser?.avatar
              }
            />
          </div>
        </div>
        <div className="chat-header">
          {messageDetails?.username}
          <time className="text-xs opacity-50 ml-2">
            {new Date(messageDetails?.createdAt).toLocaleTimeString()}
          </time>
        </div>
        <div className="chat-bubble">{messageDetails?.message}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </>
  );
};

export default Message;
