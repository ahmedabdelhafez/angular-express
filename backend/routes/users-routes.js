import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
import { users } from "../model/usersModel";
import { createToken } from "../security/jwt_creaetor";
// << start coding the proggrm >> //
export const usersRouter = express.Router();

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
usersRouter.post("/login", (req, res) => {
  // << extract data from request body >>
  const { email, password } = req.body;

  // << check if the email is exists or not >>
  users
    .findOne({
      email: email
    })
    .then(user => {
      if (user) {
        let isPasswordMatch = bcrypt.compareSync(password, user.password);
        if (isPasswordMatch) {
          let userToken = createToken({
            name: user.name,
            email: user.email
          });
          res.status(200).json({
            data: {
              name: user.name,
              email: user.email
            },
            token: userToken
          });
        } else {
          res.status(401).json({
            message: "please check email or password"
          });
        }
      } else {
        res.status(404).json({
          message: "no data for this user"
        });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// << create a new account for a user >> //
usersRouter.post("/register", (req, res) => {
  let { name, email, password, role } = req.body;
  // << Save user to database >> //
  var user = new users({
    name: name,
    email: email,
    password: password,
    role: role
  });

  user
    .save()
    .then(data => {
      res.status(200).json({
        message: "new user created succefully",
        messageCode: 1,
        data: data
      });
    })
    .catch(err => {
      res.status(422).json({
        message: `some errors while saving user: ${email}`,
        code: 12415
      });
    });
});
// << update user password  >> //

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
);
