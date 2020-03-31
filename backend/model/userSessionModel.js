import mongoose from "mongoose";

const userSessionSchema = mongoose.Schema({
  name: String,
  socketId: String
});
