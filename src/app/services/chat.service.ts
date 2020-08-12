import { Injectable } from "@angular/core";
// import { Socket } from "ngx-socket-io";
import { Observable, Subject } from "rxjs";
import * as io from "socket.io-client";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class ChatService {
  private url = environment.chatServer.url;
  private socket: SocketIOClient.Socket;
  userMessage: Subject<any> = new Subject<any>();

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message) {
    this.socket.emit("new-message", message);
  }

  /**
   * @description event that come when any client send a message
   * @returns void
   */
  public getMessages() {
    return Observable.create((observer) => {
      this.socket.on("client-message", (msg) => {
        observer.next(msg);
      });
    });
  }

  /**
   * @description event that come when any client susscfuly connected to our server
   * @returns void
   */
  public afterConnect() {
    return Observable.create((observer) => {
      this.socket.on("after-connect", (msg) => {
        observer.next(msg);
      });
    });
  }

  public afterDisconnect() {
    return Observable.create((observer) => {
      this.socket.on("after-disconnect", (msg) => {
        observer.next(msg);
      });
    });
  }

  onUserWrite(userText) {
    this.socket.emit("writing", userText);
  }

  getWrittingStatus() {
    return Observable.create((observer) => {
      this.socket.on("writing-user-text", (msg) => {
        observer.next(msg);
      });
    });
  }

  closeSocket() {
    this.socket.emit("disconnect");
  }

  // sendMesage(message) {
  //   this.socket.emit("new-message", message);
  // }

  // getMessage(): Observable<any> {
  //   return Observable.create(observer => {
  //     this.socket.on("new-message", message => {
  //       observer.next(message);
  //     });
  //   });
  // }
}
