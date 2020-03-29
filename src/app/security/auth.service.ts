import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  jwtHelp = new JwtHelperService();
  // isTokenExpired: Boolean;

  constructor() {}

  isExpired() {
    console.log("expire function work well ***********");

    if (this.jwtHelp.isTokenExpired(sessionStorage.getItem("token"))) {
      return true;
    } else {
      return false;
    }
  }
}
