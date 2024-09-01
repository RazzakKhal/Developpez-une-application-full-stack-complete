import { Injectable } from '@angular/core';
import { SubscriptionCreation } from '../entities/Subscription';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';
import { take } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private httpClient: HttpClient) { }

  createSubscription(subscription: SubscriptionCreation) {
    return this.httpClient.post<User>(`${API_URL}/subscription/create`, subscription).pipe(
      take(1)
    )
  }

  deleteSubscription(userId : number, themeId : number){
    return this.httpClient.delete<User>(`${API_URL}/subscription/delete/${userId}/${themeId}`).pipe(
      take(1)
    )
  }
}
