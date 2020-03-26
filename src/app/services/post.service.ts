import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseProdUrl } from '../../assets/config/Config';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  navState: BehaviorSubject<string> = new BehaviorSubject<string>('close');
  constructor(private http: HttpClient) { }


  getPosts() {
    console.log(`Test URL: ${environment.config.prodUrl}`);

    return this.http.get(`${baseProdUrl}/api/studentsubject/findall`);
  }

  getPost(postId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  toggleNav(state?: string) {
    this.navState.next(state)
  }

  getState() {
    return this.navState.asObservable();
  }
}
