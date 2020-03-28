const path = require("path");
import express from "express";
import http from "http";
import socketIo from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import { mainRouter } from "./backend/routes/mainroute";

//  < ################################################### > //

dotenv.config();
// << get express instance >> //
const app = express();

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(conn => {
    console.log("mongodb connected well");
  })
  .catch(err => {
    console.log("an error while connect to mongodb");
  });

app.use(cors());
app.use(helmet());
app.use(mainRouter);
// << create the server for socket io >> //
const server = http.createServer(app);
// << socket io instance >> //
const io = socketIo(server);



// << load angular app index.html file >> //
app.use(express.static(__dirname + "/dist"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/dist", "index.html"));
});

/** Create the socket connection */
const connections = [];

io.sockets.on("connection", socket => {
  console.log("socket connected well and pushed to array");
  connections.push(socket);
  // console.log(connections[0].id);

  // << listin to new message and print it >> //
  socket.on("new-message", message => {
    // resend the message to all users include: sender
    io.emit("message", {
      message: message,
      createDate: new Date().toLocaleString()
    });
    ////////////// << send to all excepect the sender >> ///
    // socket.broadcast.emit("message", { message: message });
    // console.log("new message from client: " + message);
  });

  socket.on("writing", userText => {
    socket.broadcast.emit("writing-user-text", userText);
  });

  socket.on("disconnect", () => {
    console.log("socket disconnect well");
  });
});

// Start the app by listening on the default Heroku port
const listen = server.listen(process.env.PORT || 8080, () => {
  console.log("app run well on port: " + listen.address().port);
});
