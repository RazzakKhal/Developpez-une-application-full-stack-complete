import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { take } from 'rxjs';
import { GetThemesResponse } from '../models/responses/GetThemesResponse';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(private httpClient : HttpClient) { }

  getAllThemes(){
    return this.httpClient.get<GetThemesResponse>(`${API_URL}/themes`).pipe(
      take(1)
    )
  }
}
