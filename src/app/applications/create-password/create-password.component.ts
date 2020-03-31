import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";
import { CustomValidation } from "src/app/shared/validator/CustomValidation";
import { AppAlert } from "src/app/shared/util/AppAlert";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-create-password",
  templateUrl: "./create-password.component.html",
  styleUrls: ["./create-password.component.scss"]
})
export class CreatePasswordComponent implements OnInit, OnDestroy {
  passwordForm: FormGroup;
  passwordFormSub: Subscription;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.passwordForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(8)]]
      },
      {
        validators: [
          CustomValidation.ConfirmedValidator("password", "confirmPassword")
        ]
      }
    );
  }

  submitForm() {
    if (this.passwordForm.valid) {
      this.passwordFormSub = this.userService
        .createPassword(this.passwordForm.value)
        .subscribe(
          async data => {
            await AppAlert.showSuccess(
              "password updated successfuly",
              "",
              2000
            );
            await this.router.navigate(["/"]);
          },
          async (err: HttpErrorResponse) => {
            await AppAlert.showError(err.error["msg"], "", 2000);
          }
        );
    }
  }

  resetForm() {
    this.passwordForm.reset();
  }
  ngOnDestroy() {
    if (this.passwordFormSub) this.passwordFormSub.unsubscribe();
  }
}
