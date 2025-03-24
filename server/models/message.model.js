const messageSchema = new mongoose.Schema({
    senderId: {
        required: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export default mongoose.model('Message', messageSchema);
