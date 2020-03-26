import express from "express";

export const userRouter = express.Router();

userRouter.get("/findall", (req, res) => {
  res.status(200).json({ msg: "welcome from chat app " });
});
