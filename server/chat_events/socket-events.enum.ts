export const chatEvents = Object.freeze({
  /**  when new client connect to socket */
  connect: "connection",
  /** event fired after user connected to socket server */
  afterConnect: "after-connect",
  /**  event fire when `new message` recived from client */
  newMessage: "new-message",
  /** event fire to send message again to users */
  clientMessage: "client-message",
  /**  event fire when user write on keyboard */
  writing: "writing",
  /**  event fire when client disconnected */
  disconnect: "disconnect",
  /** event fired after user disconnected from server */
  afterDisconnect:'after-disconnect'
});
