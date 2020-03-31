import { Component, OnInit, OnDestroy } from "@angular/core";
import { ChatService } from "../../services/chat.service";
import { Subscription, timer } from "rxjs";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit, OnDestroy {
  messageModel: string = null;
  afterConnectedSubscription: Subscription;
  getMessageSubscription: Subscription;
  writtingSubscription: Subscription;
  afterDisconnectSubscription: Subscription;
  incomeMessages: any[] = [];

  currDate = new Date();
  timerObs$ = timer(1000, 1000);
  currentsoketId = null;
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    // this.timerObs$.subscribe(data => {
    //   this.currDate = new Date();
    // });
    // << fire after user connected or open chat pag>> //
    this.afterConnectedSubscription = this.chatService.afterConnect().subscribe(
      conn => {
        console.log("after connect status");
        console.log(conn);
        this.currentsoketId = conn.socketId;
      },
      err => {
        console.log(err);
      }
    );
    // << fire after recive essage from some body >> //
    this.getMessageSubscription = this.chatService.getMessages().subscribe(
      msg => {
        console.log("user message: ");
        // console.log(msg);
        this.incomeMessages.push(msg);
        console.log(this.incomeMessages);
      },
      err => {
        console.log(err);
      }
    );

    // << Ge user written value >> //
    this.chatService.getWrittingStatus().subscribe(
      status => {
        console.log("user write staus value: " + status);
      },
      err => {
        console.log(err);
      }
    );

    // << after user disconnected >> //
    this.chatService.afterDisconnect().subscribe(
      data => {
        console.log("user leave the chat");
      },
      err => {
        console.log("an error when disconneting");
      }
    );
  }

  /// << Action Methods >> ///
  sendMessage() {
    let username = JSON.parse(sessionStorage.getItem("user")).data["name"];
    let email = JSON.parse(sessionStorage.getItem("user")).data["email"];
    console.log("use do action: " + username);

    this.chatService.sendMessage({
      message: this.messageModel,
      name: username,
      email: email
    });
    this.messageModel = "";
  }

  keySendMessage(event) {
    if (event.code === "Enter") {
      let username = JSON.parse(sessionStorage.getItem("user")).data["name"];
      let email = JSON.parse(sessionStorage.getItem("user")).data["email"];
      this.chatService.sendMessage({
        message: this.messageModel,
        name: username,
        email: email
      });
      this.messageModel = "";
    }
  }

  removeOneChar() {
    this.messageModel = this.messageModel.substring(
      0,
      this.messageModel.length - 1
    );
  }

  closeConnection() {
    this.chatService.closeSocket();
  }

  onUserWrite(text) {
    this.chatService.onUserWrite(text);
  }

  ngOnDestroy(): void {}
}
