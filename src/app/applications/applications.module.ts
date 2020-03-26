import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeststyleComponent } from "./teststyle/teststyle.component";
import { SharedModule } from "../shared/shared.module";
import { OtherModule } from "../shared/other.module";
import { ComponentModule } from "../shared/components/components.module";
import { MaterialModule } from "../shared/material.module";
import { BootstrapngxModule } from "../shared/bootstrapngx.module";

// const route: Routes = [
//   { path: '', component: TeststyleComponent }
// ]

@NgModule({
  declarations: [TeststyleComponent],
  imports: [
    CommonModule,
    SharedModule,
    OtherModule,
    ComponentModule,
    MaterialModule,
    BootstrapngxModule
  ],
  exports: [TeststyleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationsModule {}
