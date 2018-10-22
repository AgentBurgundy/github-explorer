import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const baseUrl = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }

  public getRandomRepo(): Observable<any> {
    return this.http.get<any[]>(baseUrl + '/repositories')
      .map(repositories => {
        return repositories[Math.floor(Math.random() * repositories.length)];
      });
  }
}
