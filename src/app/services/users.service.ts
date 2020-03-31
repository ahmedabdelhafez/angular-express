import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserLogin } from "../model/UserLogin.interface";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  baseUrl = "http://localhost:4000/api";

  getAll() {
    return this.http.get(`${this.baseUrl}/users/findall`);
  }

  registerUser(data) {
    return this.http.post(`${this.baseUrl}/users/register`, data);
  }

  login(loginData: UserLogin) {
    return this.http.post(`${this.baseUrl}/users/login`, loginData);
  }

  createPassword(passwordData) {
    return this.http.post(`${this.baseUrl}/users/update`, passwordData, {
      responseType: "json"
    });
  }
}
