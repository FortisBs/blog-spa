import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Article, ArticlesResponse, QueryParams } from "../api";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private url = 'https://api.spaceflightnewsapi.net/v4';

  constructor(private http: HttpClient) {}

  getArticles(params: QueryParams): Observable<ArticlesResponse> {
    return this.http.get<ArticlesResponse>(this.url + '/articles', { params });
  }

  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(this.url + '/articles/' + id);
  }
}
