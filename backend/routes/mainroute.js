import express from "express";
import { userRouter } from "./users";
import { chatRouter } from "./chat";

export const mainRouter = express.Router();

mainRouter.use("/api/users", userRouter);
mainRouter.use("/api/chat", chatRouter);
