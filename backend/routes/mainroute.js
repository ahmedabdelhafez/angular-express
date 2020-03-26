import express from "express";
import { userRouter } from "./users";

export const mainRouter = express.Router();

mainRouter.use("/api/users", userRouter);
