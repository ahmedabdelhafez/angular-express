import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeststyleComponent } from "./teststyle/teststyle.component";
import { SharedModule } from "../shared/shared.module";
import { OtherModule } from "../shared/other.module";
import { Routes, RouterModule } from "@angular/router";
import { TestprintComponent } from "./testprint/testprint.component";
import { ComponentModule } from "../shared/components/components.module";
import { FullmenuComponent } from "./fullmenu/fullmenu.component";
import { MaterialModule } from "../shared/material.module";
import { ObservableComponent } from "./observable/observable.component";
import { ChildComponent } from "./child/child.component";
import { ProfileComponent } from "./profile/profile.component";
import { BootstrapngxModule } from "../shared/bootstrapngx.module";
import { GridComponent } from "./grid/grid.component";

// const route: Routes = [
//   { path: '', component: TeststyleComponent }
// ]

@NgModule({
  declarations: [
    TeststyleComponent,
    TestprintComponent,
    FullmenuComponent,
    ObservableComponent,
    ChildComponent,
    ProfileComponent,
    GridComponent
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
    TestprintComponent,
    ProfileComponent,
    GridComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationsModule {}
