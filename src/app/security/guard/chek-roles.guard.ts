import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  ActivatedRoute
} from "@angular/router";
import { Observable } from "rxjs";
import { AppAlert } from "src/app/shared/util/AppAlert";

@Injectable({
  providedIn: "root"
})
export class ChekRolesGuard implements CanActivate {
  constructor(private activatedRoute: ActivatedRoute) {}
  admin = "admin";
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    if (this.admin === "user") {
      return true;
    } else {
      await AppAlert.showWarning("check roles is not good", "", 2000);
      return false;
    }
  }
}
