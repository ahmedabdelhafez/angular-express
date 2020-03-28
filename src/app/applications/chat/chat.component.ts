import { Component, OnInit } from "@angular/core";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  messageModel: string = null;
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(msg => {
      console.log("user message: ");
      console.log(msg);
    });

    /// ge user written vlue

    this.chatService.getWrittingStatus().subscribe(status => {
      console.log("user write staus value: " + status);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.messageModel);
    this.messageModel = "";
  }

  closeConnection() {
    this.chatService.closeSocket();
  }

  onUserWrite(text) {
    this.chatService.onUserWrite(text);
  }
}
