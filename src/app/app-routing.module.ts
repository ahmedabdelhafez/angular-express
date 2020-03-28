import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { TeststyleComponent } from "./applications/teststyle/teststyle.component";
import { DashboardComponent } from "./applications/dashboard/dashboard.component";
import { ErrorpageComponent } from "./applications/errorpage/errorpage.component";
import { ChatComponent } from './applications/chat/chat.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    data: { breadcrumb: "/", title: "login page" }
  },
  {
    path: "login",
    component: LoginComponent,
    data: { breadcrumb: "/login", title: "login page" }
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    data: { breadcrumb: "/dashboard", title: "dashboard page" }
  },
  {
    path: "chat",
    component: ChatComponent,
    data: { breadcrumb: "/chat", title: "chat page" }
  },
  {
    path: "teststyle",
    component: TeststyleComponent,
    data: { breadcrumb: "/teststyle", title: "style" }
  },
  {
    path: "**",
    pathMatch: "full",
    component: ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
