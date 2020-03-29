export const socketEvents = io => {
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
};
