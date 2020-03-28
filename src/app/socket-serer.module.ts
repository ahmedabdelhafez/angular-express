import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

const config: SocketIoConfig = { url: "http://localhost:4000", options: {} };
@NgModule({
  declarations: [],
  imports: [CommonModule, SocketIoModule.forRoot(config)],
  exports: [SocketIoModule]
})
export class SocketSererModule {
  constructor() {
    console.log("sockt server module loaded well");
  }
}
