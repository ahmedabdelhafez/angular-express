import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class ConfigAppService {
  
  constructor(private http:HttpClient) {}

  getConfig(): Promise<Object> {
    let config = { name: "WebApp ", price: 15000000, employees: 150 };
    return of(config).toPromise();
  }
}
