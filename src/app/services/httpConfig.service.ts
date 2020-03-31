import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HttpConfigService {
  server1 = {
    server: "http://localhost:4000/",
    apiUrl: "api/",
    serverWithApiUrl(): string {
      return this.server1.server + this.server1.apiUrl;
    }
  };

  constructor() {}

  setServer(server: string) {}

  setApiUrl(apiUrl: string) {}
}
