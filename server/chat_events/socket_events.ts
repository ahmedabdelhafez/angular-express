import { chatEvents } from "./socket-events.enum";
import { chatLogModel } from "../model/chatLogModel";
export const socketEvents = (io) => {
  /** Create the socket connection */
  const connections = [];

  io.sockets.on(chatEvents.connect, (cl) => {
    let client = cl;
    console.log("client connected well and session pushed to array");
    // << send session data to connected client >> //
    connections.push(client);
    client.emit(chatEvents.afterConnect, { socketId: client.id, active: true });
    // console.log(connections[0].id);
    // << listin to new message from client and redirect it to other connected clients >> //
    client.on(chatEvents.newMessage, (messageObj) => {
      // << Log message to database >> //
      let { name, message, email } = messageObj;

      let chatModel = new chatLogModel({
        name: name,
        email: email,
        message: message,
        socketId: client.id,
        createDate: new Date().toLocaleString(),
      });
      chatModel
        .save()
        .then((data) => {
          console.log("message logged to database");
        })
        .catch((err) => {
          console.log("erro when log message");
        });

      // resend the message to all users include: [sender]
      io.emit(chatEvents.clientMessage, {
        name: messageObj["name"],
        email: messageObj["email"],
        message: messageObj["message"],
        socketId: client.id,
        createDate: new Date().toLocaleString(),
      });
      ////////////// << send to all except the [sender] >> ///
      // client.broadcast.emit("message", { message: message });
      // console.log("new message from client: " + message);
    });

    // << send event to all connected users when the current user write [expect: currnet user] >> //
    client.on(chatEvents.writing, (userText) => {
      client.broadcast.emit("writing-user-text", userText);
    });

    client.on(chatEvents.disconnect, () => {
      client.emit(chatEvents.afterDisconnect, {
        socketId: client.id,
        active: false,
      });
      console.log("socket disconnect well");
    });
  });

  io.on(chatEvents.disconnect, () => {
    this.client.emit(chatEvents.afterDisconnect, {
      socketId: this.client.id,
      active: false,
    });
  });
};
