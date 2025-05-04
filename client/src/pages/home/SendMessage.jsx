import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageThunk } from '../../store/slice/message/message.thunk';

const SendMessage = () => {

    const [message, setMessage] = useState("");
    const { selectedUser } = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()
    // console.log(selectedUser?._id)

    const handleSendMessage = () => {
        if (!selectedUser?._id) {
            console.error("Receiver ID is missing");
            return;
        }
    
        dispatch(sendMessageThunk({ recieverId: selectedUser._id, message }));
        // console.log("Receiver ID:", selectedUser._id);
        setMessage('');
    }
    
    return (
        <div className="w-full p-3 flex gap-2">
            <input
                type="text"
                placeholder="Type here....."
                className="input input-bordered input-primary w-full "
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage} className="btn btn-square btn-outline bg-primary">
                <IoMdSend />
            </button>
        </div>
    )
}

export default SendMessage
