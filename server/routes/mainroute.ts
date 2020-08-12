import * as express from "express";
import { usersRouter } from "./users-routes";
import { chatRouter } from "./chat-routes";

export const mainRouter = express.Router();

mainRouter.use("/api/users", usersRouter);
// mainRouter.use("/api/chat", chatRouter);
