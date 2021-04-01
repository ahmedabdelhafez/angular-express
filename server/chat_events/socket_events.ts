import { chatEvents } from "./socket-events.enum";
import { chatLogModel } from "../model/chatLogModel";
import { Server, Socket } from "socket.io";
export const socketEvents = (serverIo:Server) => {
  /** Create the socket connection */
  const connections = [];
  let clientRef: Socket;

  serverIo.sockets.on(chatEvents.connect, (cl) => {
    clientRef = cl;
    console.log("client connected well and session pushed to array");
    // << send session data to connected client >> //
    connections.push(clientRef);
    clientRef.emit(chatEvents.afterConnect, {
      socketId: clientRef.id,
      active: true,
    });
    // console.log(connections[0].id);
    // << listin to new message from client and redirect it to other connected clients >> //
    clientRef.on(chatEvents.newMessage, (messageObj) => {
      // << Log message to database >> //
      let { name, message, email } = messageObj;

      let chatModel = new chatLogModel({
        name: name,
        email: email,
        message: message,
        socketId: clientRef.id,
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
      serverIo.emit(chatEvents.clientMessage, {
        name: messageObj["name"],
        email: messageObj["email"],
        message: messageObj["message"],
        socketId: clientRef.id,
        createDate: new Date().toLocaleString(),
      });
      ////////////// << send to all except the [sender] >> ///
      // client.broadcast.emit("message", { message: message });
      // console.log("new message from client: " + message);
    });

    // << send event to all connected users when the current user write [expect: currnet user] >> //
    clientRef.on(chatEvents.writing, (userText) => {
      clientRef.broadcast.emit("writing-user-text", userText);
    });

    clientRef.on(chatEvents.disconnect, () => {
      clientRef.emit(chatEvents.afterDisconnect, {
        socketId: clientRef.id,
        active: false,
      });
      console.log("socket disconnect well");
    });
  });

  serverIo.on(chatEvents.disconnect, () => {
    clientRef.emit(chatEvents.afterDisconnect, {
      socketId: clientRef.client.id,
      active: false,
    });
  });
};
