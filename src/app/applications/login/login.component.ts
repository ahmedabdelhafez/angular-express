import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';
import { TranslationService } from 'src/app/core/translation.service';
import { UserLogin } from 'src/app/model/UserLogin.interface';
import { UsersService } from 'src/app/services/users.service';
import { AppAlert } from 'src/app/shared/util/AppAlert';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private userService: UsersService,
    private fb: FormBuilder,
    private translate: TranslationService
  ) {}
  userloginForm: FormGroup;
  userSubscription: Subscription;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userloginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  doLogin() {
    if (this.userloginForm.valid) {
      let userdata: UserLogin = this.userloginForm.value;
      this.userSubscription = this.userService.login(userdata).subscribe(
        async (data) => {
          sessionStorage.setItem("token", data["token"]);
          sessionStorage.setItem("user", JSON.stringify(data));
          await AppAlert.showSuccess("logged in succefuly", "", 1500);
          await AppAlert.showInfo(
            "you will be redirect to chat room",
            "",
            2000
          );
          this.router.navigate(["/chat"]);
        },
        async (err: HttpErrorResponse) => {
          console.log(err);
          if (err.error["code"] === "NODATA") {
            let trans = await this.translate.getTranslation(
              "messages.no-user-data"
            );
            await AppAlert.showToastWarning(trans, "", 2000);
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
