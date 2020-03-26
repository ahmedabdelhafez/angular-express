import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpConfigService } from "./httpConfig.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpDataServiceService {
  private actionUrl: string;
  urlHeaders = new HttpHeaders();

  constructor(private http: HttpClient, private config: HttpConfigService) {}

  ngOnInit() {
    this.actionUrl = this.config.server1.serverWithApiUrl();
    // this.actionUrl = "https://jsonplaceholder.typicode.com/posts";
    console.log("Active Url: " + this.actionUrl);
  }

  public getAll<T>(uri: string): Observable<T> {
    return this.http.get<T>(`this.actionUrl/${uri}`);
  }

  public getOne<T>(id: any): Observable<T> {
    return this.http.get<T>(this.actionUrl + id);
  }

  public post<T>(items: any): Observable<T> {
    return this.http.post<T>(this.actionUrl, items);
  }

  public update<T>(id: number, itemToUpdate: any): Observable<T> {
    return this.http.put<T>(this.actionUrl + id, itemToUpdate);
  }

  public delete<T>(id: number): Observable<T> {
    return this.http.delete<T>(this.actionUrl + id);
  }
}
