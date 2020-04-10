const path = require("path");
import express from "express";
import http from "http";
import socketIo from "socket.io";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import passport from "passport";
import { passportconfig } from "./backend/security/passport";
import { mainRouter } from "./backend/routes/mainroute";
import { socketEvents } from "./backend/chat_events/socket_events";
//  < ################################################### > //

dotenv.config();

// << get express instance >> //
const app = express();

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(conn => {
    console.log("mongodb connected well");
  })
  .catch(err => {
    console.log("an error while connect to mongodb");
  });

app.use(cors());
app.use(helmet());
app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(mainRouter);
// << create the server for socket io >> //
const server = http.createServer(app);
// << socket io instance >> //
const io = socketIo(server);
http.globalAgent.maxSockets = 2;
// << use sockwt events module >> //
socketEvents(io);
// << load angular app index.html file >> //
app.use(express.static(__dirname + "/dist"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/dist", "index.html"));
});

// Start the app by listening on the default Heroku port
const listen = server.listen(process.env.PORT || 8080, () => {
  console.log("app run well on port: " + listen.address().port);
});
