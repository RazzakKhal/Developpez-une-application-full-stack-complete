import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { CreateComment } from '../models/CreateComment';
import { take } from 'rxjs';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient : HttpClient) { }

  createComment(comment : CreateComment){
    return this.httpClient.post<Comment>(`${API_URL}/comments/create`,comment).pipe(
      take(1)
    )
  }
}
