import React from 'react'

const Message = ({messageDetails}) => {
    // console.log(messageDetails)
    
    return (
        <>
        
            <div className="chat chat-start p-2">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-header">
                    
                    
                   {messageDetails?.name} 
                    <time className="text-xs opacity-50">{messageDetails?.createdAt}</time>
                </div>
                <div className="chat-bubble">{messageDetails?.message}!</div>
                <div className="chat-footer opacity-50">Delivered</div>
            </div>
            
        </>
    )
}

export default Message
