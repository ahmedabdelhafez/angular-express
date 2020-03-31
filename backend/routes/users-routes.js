import express from "express";

import jwt from "jsonwebtoken";
import passport from "passport";
import { users } from "../model/usersModel";
import { createToken } from "../security/jwt_creaetor";
// << start coding the proggrm >> //
export const usersRouter = express.Router();
import bcrypt from "bcryptjs";
import { sendMail } from "../email_config/email_config";
// << get all users >> //

usersRouter.get("/findall", (req, res) => {
  users
    .find(
      {},
      {
        _id: 1,
        name: 1,
        email: 1,
        role: 1
      }
    )
    .then(data => {
      res.json(data).status(200);
    })
    .catch(err => {
      res
        .json({
          message: "no data here"
        })
        .status(404);
    });
});

// << login to application >> //
usersRouter.post("/login", async (req, res) => {
  // << extract data from request body >>
  const { email, password } = req.body;

  // << check if the email is exists or not >>
  let user = await users.findOne({ email: email });

  if (user) {
    let isPasswordMatch = bcrypt.compareSync(password, user.password);
    if (isPasswordMatch) {
      let userToken = createToken({
        name: user.name,
        email: user.email
      });
      return res.status(200).json({
        data: {
          name: user.name,
          email: user.email
        },
        token: userToken
      });
    } else {
      return res.status(400).json({
        message: "please check email or password",
        code: "EMAIL_PASSWORD"
      });
    }
  } else {
    return res.status(404).json({
      message: "no data for this user",
      code: "NODATA"
    });
  }
});

// << create a new account for a user >> //
usersRouter.post("/register", async (req, res) => {
  let { name, email } = req.body;
  // << Save user to database >> //
  var user = new users({
    name: name,
    email: email
  });

  let newuser = await user.save();
  if (!newuser) {
    res.status(400).json({ msg: "an error when creaeting new user" });
  }
  let emailState = await sendMail(email);
  if (emailState) {
    console.log("email send well to user");
    res.status(200).json({
      msg: "new user created check tou email please to add password",
      data: newuser
    });
  } else {
    res.status(400).json({ msg: "an error while sending email" });
  }
});

//////////////////////////////////////////////////////////////////////////////////////////
// << update user password  >> //

usersRouter.post("/update", async (req, res) => {
  let { email, password, confirmPassword } = req.body;
  let user = await users.findOne({ email: email });
  let hashPassword;
  // << check if the user in the database or not >> //
  if (!user) {
    return res
      .status(404)
      .json({ msg: `User with email: ${email} is not found` });
  }
  // << generate salt for password strength >> //
  let salt = await bcrypt.genSalt(10);
  // << start hashing the password >> //
  hashPassword = await bcrypt.hash(password, salt);
  if (!hashPassword) {
    return res.status(404).json({ msg: `an erro when created password` });
  }

  // << update user password and send response to UI >> //
  let updateValue = await users.updateOne(
    { email: email },
    { $set: { password: hashPassword } }
  );
  if (updateValue) {
    return res.status(200).json({
      msg: "password created well and user updated",
      data: updateValue
    });
  } else {
    return res
      .status(400)
      .json({ msg: "an error while updating user password" });
  }
});

// << delete user from database [BY: Email] >> //
usersRouter.delete(
  "/deleteuser",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    let email = req.body.email;
    users
      .deleteOne({
        email: email
      })
      .then(data => {
        res
          .json({
            message: "user removed well thanks",
            messageCode: 4
          })
          .status(200);
      })
      .catch(err => {
        res.json(err).status(404);
      });
  }

  /// << chec email >> //
);
