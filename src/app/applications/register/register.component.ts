import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomValidation } from "src/app/shared/validator/CustomValidation";
import { UsersService } from "src/app/services/users.service";
import { AppAlert } from "src/app/shared/util/AppAlert";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  disableOnRequest = false;
  registerSubscription: Subscription;
  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  submitData() {
    if (this.registerForm.valid) {
      this.registerSubscription = this.userService
        .registerUser(this.registerForm.value)
        .subscribe(async data => {
          await AppAlert.showToastSuccess("user created well", "", 2000);
          console.log(data);
          this.resetForm();
          this.router.navigate(["/"]);
        });
    }
  }

  resetForm() {
    this.registerForm.reset();
    this.registerForm.clearValidators();
    this.registerForm.updateValueAndValidity({ onlySelf: true });
  }

  ngOnDestroy() {
    if (this.registerSubscription) this.registerSubscription.unsubscribe();
  }
}
