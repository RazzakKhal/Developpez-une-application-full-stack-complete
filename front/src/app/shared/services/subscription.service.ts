import { Injectable } from '@angular/core';
import { SubscriptionCreation } from '../entities/Subscription';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private httpClient: HttpClient) { }

  createSubscription(subscription: SubscriptionCreation) {
    return this.httpClient.post(`${API_URL}/subscription/create`, subscription).pipe(
      take(1)
    )
  }
}
