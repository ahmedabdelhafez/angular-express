import * as mongoose from "mongoose";

export interface ChatRooms extends mongoose.Document {
  name: string;
  email: string;
  message: string;
  createDate: Date;
  socketId: String;
  roomName: String;
  roomId: String;
}

export class ChatLog {
  private _chatRoomsModel: mongoose.Model<ChatRooms>;
  constructor() {
    const schema = new mongoose.Schema({
      name: String,
      email: String,
      message: String,
      createDate: Date,
      socketId: String,
      roomName: String,
      roomId: String,
    });

    this._chatRoomsModel = mongoose.model<ChatRooms>("chatRooms", schema);
  }

  public get chatRoomsModel() {
    return this._chatRoomsModel;
  }
}
