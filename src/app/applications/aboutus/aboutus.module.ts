import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutusComponent } from "./aboutus.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { OtherModule } from "src/app/shared/other.module";
import { MaterialModule } from "src/app/shared/material.module";
import { MoreaboutComponent } from "./moreabout/moreabout.component";
import { ComponentModule } from "src/app/shared/components/components.module";

const route: Routes = [
  {
    path: "",
    component: AboutusComponent,
    children: [
      {
        path: "moreabout",
        component: MoreaboutComponent,
        data: { breadcrumb: "/moreabout" }
      }
    ]
  }
];

@NgModule({
  declarations: [AboutusComponent, MoreaboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    OtherModule,
    ComponentModule,
    RouterModule.forChild(route)
  ],
  exports: [RouterModule]
})
export class AboutusModule {}
