import mongoose from "mongoose";

const chatLogSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createDate: Date,
  socketId: String,
  roomName: String,
  roomId: String
});

export const chatLogModel = mongoose.model("chatLog", chatLogSchema);
