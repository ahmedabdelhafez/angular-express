import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const usersSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: { type: String }
});

// usersSchema.pre("update", function(next) {
//   const user = this;
//   // if (!isModified ('user.password')) {
//   //   return next();
//   // }

//   bcrypt.genSalt(10, async (err, salt) => {
//     if (err) {
//       return next(err);
//     }
//     await bcrypt.hash(user.password, salt, (err, hash) => {
//       console.log("after hash");
//       console.log(hash);

//       if (err) {
//         return next(err);
//       }
//       user.password = hash;
//       next();
//     });
//   });
// });

export const users = mongoose.model("users", usersSchema);
