import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  message: String,
  createAt: Date,
  chatRoomName: String,
  chatRoomId: String
});

export const chat = mongoose.model("chat", chatSchema);
