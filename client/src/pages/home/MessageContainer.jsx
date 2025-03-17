import React from 'react'
import User from './User'
import Message from './Message'
import { IoMdSend } from "react-icons/io";

const MessageContainer = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className=" p-2 border-b border-b-white/10">
        <User />
      </div>
      <div className='h-full overflow-y-auto'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div>
        <div className="w-full p-3 flex gap-2">
          <input
            type="text"
            placeholder="Type here....."
            className="input input-bordered input-primary w-full"
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
