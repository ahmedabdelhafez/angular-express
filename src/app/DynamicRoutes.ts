import { Router, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export class DynamicRoutes {
  constructor() {}

  allRoutes: Routes = [
    {
      path: "",
      component: LoginComponent,
      data: {}
    }
  ];
}
