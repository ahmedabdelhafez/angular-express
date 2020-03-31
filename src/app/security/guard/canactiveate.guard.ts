import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
  CanActivate,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { AppAlert } from "src/app/shared/util/AppAlert";

@Injectable({
  providedIn: "root"
})
export class CanactiveateGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const userToken = JSON.parse(sessionStorage.getItem("token"));

    if (!userToken) {
      console.log("no token");
      await AppAlert.showError(
        "you must register first or login to acces chat",
        " Acces denied",
        2000
      );
      this.router.navigate(["/"]);
      return false;
    }
    return true;
  }
}
