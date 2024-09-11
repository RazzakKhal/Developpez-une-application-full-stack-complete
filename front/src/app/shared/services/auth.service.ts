import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { RegisterForm } from '../entities/RegisterForm';
import { LoginForm } from '../entities/LoginForm';
import { Observable, take } from 'rxjs';
import { RegisterResponse } from '../models/responses/RegisterResponse';
import { LoginResponse } from '../models/responses/LoginResponse';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly token = "token";

  constructor(private httpClient : HttpClient) { }

  login(loginForm : LoginForm) : Observable<LoginResponse>{
   return this.httpClient.post<LoginResponse>(`${API_URL}/auth/login`, loginForm).pipe(
    take(1)
  );
  }

  register(registerForm : RegisterForm) : Observable<RegisterResponse>{
    return this.httpClient.post<RegisterResponse>(`${API_URL}/auth/register`, registerForm).pipe(
      take(1)
    );
  }

  getToken(){
    return localStorage.getItem(this.token);
  }

  setToken(token : string){
    localStorage.setItem(this.token ,token);
  }

  isAuthenticate(){
    // penser à ajouter la date de validité du token
    if(this.getToken()){
      const decoded = jwtDecode(this.getToken() as string)
      if(decoded.exp as number > (new Date().getTime())){
        localStorage.removeItem('token')
        return false;
      }
      return true;
    }
    return false;

  }
}
