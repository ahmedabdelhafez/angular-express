import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../services/users.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { UserLogin } from "../model/UserLogin.interface";
import { AppAlert } from "../shared/util/AppAlert";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private userService: UsersService,
    private fb: FormBuilder
  ) {}
  userloginForm: FormGroup;
  userSubscription: Subscription;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userloginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }

  login() {
    if (this.userloginForm.valid) {
      let userdata: UserLogin = this.userloginForm.value;
      this.userSubscription = this.userService.login(userdata).subscribe(
        async data => {
          sessionStorage.setItem("token", data["token"]);
          await AppAlert.showSuccess("logged in succefuly", "", 1500);
          await AppAlert.showInfo(
            "you will be redirect to chat room",
            "",
            2000
          );
          this.router.navigate(['/chat']);
        },
        async (err: HttpErrorResponse) => {
          console.log(err);
          if (err.error["code"] === "NODATA") {
            await AppAlert.showToastWarning(
              "no data found for this user please enter a valid email",
              "",
              2000
            );
          } else if (err.error["code"] === "EMAIL_PASSWORD") {
            await AppAlert.showToastWarning(
              "please check email or password",
              "",
              1500
            );
          }
        }
      );
    }
  }

  ngOnDestroy() {}
}
