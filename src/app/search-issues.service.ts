import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchIssuesService {


  constructor(private http: HttpClient) {}

  getGitHubIssues(url: any) {
    return this.http.get(url)
  }
}