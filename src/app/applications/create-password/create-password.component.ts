import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";

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

  ngOnInit() {}

  ngOnDestroy() {}

  createForm() {
    
  }

  submitForm() {}

  resetForm() {}
}
