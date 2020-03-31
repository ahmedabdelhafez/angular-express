import mongoose from "mongoose";

const chatRoomSchema = mongoose.Schema({});

export const chatRoomModel = mongoose.model("chatRoom", chatRoomSchema);
