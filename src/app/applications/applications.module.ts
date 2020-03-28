import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeststyleComponent } from "./teststyle/teststyle.component";
import { SharedModule } from "../shared/shared.module";
import { OtherModule } from "../shared/other.module";
import { ComponentModule } from "../shared/components/components.module";
import { MaterialModule } from "../shared/material.module";
import { BootstrapngxModule } from "../shared/bootstrapngx.module";
import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { ChatComponent } from "./chat/chat.component";

// const route: Routes = [
//   { path: '', component: TeststyleComponent }
// ]

@NgModule({
  declarations: [TeststyleComponent, ChatComponent],
  imports: [
    CommonModule,
    SharedModule,
    OtherModule,
    ComponentModule,
    MaterialModule,
    BootstrapngxModule
  ],
  exports: [TeststyleComponent, ChatComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationsModule {}
