// import Message from "../models/message.model.js"
// import Conversation from "../models/conversation.model.js"
// import { asyncHandler } from "../utilities/asyncHandler.utility.js";
// import errorHandler from "../utilities/errorHandler.utility.js";

// export const sendMessage = asyncHandler(async (req, res, next) => {
//     const senderId = req.user._id;
//     const receiverId = req.params.receiverId;
//     const message = req.body.message;
//     console.log(senderId,receiverId,message)

//     if (!senderId || !receiverId || !message) {
//         return next(new errorHandler("All fields are required", 400));
//     }

//     let conversation = await Conversation.findOne({
//         participants: { $all: [senderId, receiverId] },
//     });

//     if (!conversation) {
//         conversation = await Conversation.create({
//             participants: [senderId, receiverId],
//         });
//     }

//     const newMessage = await Message.create({
//         senderId,
//         receiverId,
//         message,
//     });

//     if (newMessage) {
//         conversation.messages.push(newMessage._id);
//         await conversation.save();
//     }
//     // socket.io

//     res.status(200).json({
//         success: true,
//         responseData: newMessage,
//     });

// });

// export const getMessage = asyncHandler(async (req, res, next) => {
//     const myId = req.user._id;
//     const otherParticipantId = req.params.otherParticipantId;
//     console.log(myId,otherParticipantId)
    

//     if (!myId || !otherParticipantId) {
//         return next(new errorHandler("All fields are required", 400));
//     }

//     let conversation = await Conversation.findOne({
//         participants: { $all: [myId, otherParticipantId] },
//     });

//     if (!conversation) {
//         conversation = await Conversation.create({
//             participants: [senderId, receiverId],
//         });
//     }

   
//     // socket.io

//     res.status(200).json({
//         success: true,
//         responseData:conversation,
//     });

// });
console.log("object")

import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import errorHandler from "../utilities/errorHandler.utility.js";

export const sendMessage = asyncHandler(async (req, res, next) => {
    console.log("object")
    console.log("object")
    try {
        const senderId = req.user?._id;
        const receiverId = req.params.receiverId;
        const message = req.body.message;

        console.log("🔹 Incoming Request: Send Message");
        console.log("Sender:", senderId, "Receiver:", receiverId, "Message:", message);

        if (!senderId || !receiverId || !message) {
            return next(new errorHandler("All fields are required", 400));
        }

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
            await conversation.save();
        }

        console.log("✅ Message Sent Successfully!");

        res.status(200).json({
            success: true,
            responseData: newMessage,
        });

    } catch (error) {
        console.error("❌ Error in sendMessage:", error);
        next(error);
    }
});

export const getMessage = asyncHandler(async (req, res, next) => {
    try {
        const myId = req.user?._id;
        const otherParticipantId = req.params.otherParticipantId;

        console.log("🔹 Incoming Request: Get Messages");
        console.log("User:", myId, "Other Participant:", otherParticipantId);

        if (!myId || !otherParticipantId) {
            return next(new errorHandler("All fields are required", 400));
        }

        let conversation = await Conversation.findOne({
            participants: { $all: [myId, otherParticipantId] },
        });

        if (!conversation) {
            console.log("⚠️ No conversation found, creating a new one.");
            conversation = await Conversation.create({
                participants: [myId, otherParticipantId],
            });
        }

        res.status(200).json({
            success: true,
            responseData: conversation,
        });

    } catch (error) {
        console.error("❌ Error in getMessage:", error);
        next(error);
    }
});


console.log("ANand")