import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { CreateArticle } from '../models/CreateArticle';
import { API_URL } from '../constants';
import { CreateArticleResponse } from '../models/responses/CreateArticleResponse';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient : HttpClient) { }

  getUserSubscribedArticles(userId: number){
    return this.httpClient.get(`${API_URL}/articles/user/${userId}`).pipe(
      take(1)
    )
  }

  createArticle(createArticle : CreateArticle){
    return this.httpClient.post<CreateArticleResponse>(`${API_URL}/articles/create`, createArticle).pipe(
      take(1)
    )
  }

  getArticleById(id : string){
    return this.httpClient.get<Article>(`${API_URL}/articles/${id}`)
  }
}
