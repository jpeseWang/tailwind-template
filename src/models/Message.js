import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    chatId: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    senderUsername: {
      type: String,
      required: true,
    },
    senderFullname: {
      type: String,
      required: true,
    },
    senderAvatar: {
      type: String,
    },
    receiver: {
      type: String,
      required: true,
    },
    receiverUsername: {
      type: String,
      required: true,
    },
    receiverFullname: {
      type: String,
      required: true,
    },
    receiverAvatar: {
      type: String,
    },
    inbox: [
      {
        senderId: {
          type: String,
        },
        senderFullname: {
          type: String,
        },
        senderUsername: {
          type: String,
        },
        senderAvatar: {
          type: String,
        },
        content: {
          type: String,
        },
        date: {
          type: String,
        },
      },
      { timestamps: true },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Message ||
  mongoose.model("Message", messageSchema);
