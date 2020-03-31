import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeststyleComponent } from "./teststyle/teststyle.component";
import { SharedModule } from "../shared/shared.module";
import { OtherModule } from "../shared/other.module";
import { ComponentModule } from "../shared/components/components.module";
import { MaterialModule } from "../shared/material.module";
import { BootstrapngxModule } from "../shared/bootstrapngx.module";
import { ChatComponent } from "./chat/chat.component";
import { RegisterComponent } from "./register/register.component";
import { CreatePasswordComponent } from "./create-password/create-password.component";
import { LoginComponent } from "../login/login.component";

// const route: Routes = [
//   { path: '', component: TeststyleComponent }
// ]

@NgModule({
  declarations: [
    TeststyleComponent,
    ChatComponent,
    RegisterComponent,
    CreatePasswordComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OtherModule,
    ComponentModule,
    MaterialModule,
    BootstrapngxModule
  ],
  exports: [
    TeststyleComponent,
    ChatComponent,
    RegisterComponent,
    CreatePasswordComponent,
    LoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationsModule {}
