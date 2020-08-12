import * as mongoose from "mongoose";

// const userSessionSchema = mongoose.Schema({
//   name: String,
//   socketId: String
// });

export interface UserSessionSchema extends mongoose.Document {
  name: String;
  socketId: String;
}

export class ChatLog {
  private _userSessionModel: mongoose.Model<UserSessionSchema>;
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

    this._userSessionModel = mongoose.model<UserSessionSchema>(
      "userSession",
      schema
    );
  }

  public get chatLogModel() {
    return this._userSessionModel;
  }
}
