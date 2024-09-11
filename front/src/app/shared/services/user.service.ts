import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { take } from 'rxjs';
import { User } from '../models/User';
import { UpdateUserForm } from '../models/UpdateUserForm';
import { LoginResponse } from '../models/responses/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  getUser(){
    return this.httpClient.get<User>(`${API_URL}/auth/me`).pipe(
      take(1)
    )
  }

  updateUser(updateUserForm : UpdateUserForm){
    return this.httpClient.put<LoginResponse>(`${API_URL}/user`, updateUserForm).pipe(
      take(1)
    )
  }
}
