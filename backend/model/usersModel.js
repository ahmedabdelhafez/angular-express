import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const usersSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String
  }
});

usersSchema.pre("save", function(next) {
  const user = this;
  // if (!isModified ('user.password')) {
  //   return next();
  // }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

export const users = mongoose.model("users", usersSchema);
