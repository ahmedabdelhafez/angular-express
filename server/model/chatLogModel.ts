import * as mongoose from "mongoose";

export interface ChatLogSchema extends mongoose.Document {
  name: string;
  email: string;
  message: string;
  createDate: Date;
  socketId: String;
  roomName: String;
  roomId: String;
}

const schema: mongoose.Schema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createDate: Date,
  socketId: String,
  roomName: String,
  roomId: String,
});

export const chatLogModel: mongoose.Model<ChatLogSchema> = mongoose.model<
  ChatLogSchema
>("chatLog", schema);
