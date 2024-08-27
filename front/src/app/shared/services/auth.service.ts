import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { RegisterForm } from '../models/RegisterForm';
import { LoginForm } from '../models/LoginForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }

  login(loginForm : LoginForm){
   return this.httpClient.post(`${API_URL}/auth/login`, loginForm);
  }

  register(registerForm : RegisterForm){
    return this.httpClient.post(`${API_URL}/auth/register`, registerForm);
  }
}
