import * as mongoose from "mongoose";
import bcrypt from "bcryptjs";

interface UsersType extends mongoose.Document {
  name: String;
  email: {
    type: String;
    required: true;
    unique: true;
  };
  password: { type: String };
}

const userSchema: mongoose.Schema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String },
});

userSchema.pre("save", (next) => {
  console.log("thanks work well");
  next();
});

export const Users = mongoose.model<UsersType>("users", userSchema);
