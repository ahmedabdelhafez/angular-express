import { Injectable } from "@angular/core";
// import { Socket } from "ngx-socket-io";
import { Observable, Subject } from "rxjs";
import * as io from "socket.io-client";
@Injectable({
  providedIn: "root"
})
export class ChatService {
  private url = "http://localhost:4000";
  private socket: SocketIOClient.Socket;
  userMessage: Subject<any> = new Subject<any>();

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message) {
    this.socket.emit("new-message", message);
  }

  public getMessages() {
    return Observable.create(observer => {
      this.socket.on("message", msg => {
        observer.next(msg);
      });
    });
  }

  onUserWrite(userText) {
    this.socket.emit("writing", userText);
  }

  getWrittingStatus() {
    return Observable.create(observer => {
      this.socket.on("writing-user-text", msg => {
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
