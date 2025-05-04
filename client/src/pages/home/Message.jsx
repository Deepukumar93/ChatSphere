import React from 'react'
import { useSelector } from 'react-redux';

const Message = ({ messageDetails }) => {
    const { userProfile, selectedUser } = useSelector((state) => state.userReducer);

    // console.log(userProfile?._id === messageDetails?.senderId);


    return (
        <>

            <div className={`chat ${userProfile?._id === messageDetails?.senderId ? 'chat-end' : 'chat-start'}`}>
                <div className="chat-image avatar  ">
                    <div className="w-12 rounded-full mr-4">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={
                                userProfile?._id === messageDetails?.senderId
                                    ? userProfile?.avatar
                                    : selectedUser?.avatar
                            }
                        />
                    </div>
                </div>
                <div className="chat-header">
                    {messageDetails?.username}
                    <time className="text-xs opacity-50">{messageDetails?.createdAt}</time>
                </div>
                <div className="chat-bubble">{messageDetails?.message}!</div>
                <div className="chat-footer opacity-50">Delivered</div>
            </div>

        </>
    )
}

export default Message
