import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Theme } from '../../models/Theme';
import { User } from '../../models/User';
import { Subscription } from '../../models/Subscription';
import { SubscriptionCreation } from '../../entities/Subscription';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  @Input() theme!: Theme
  @Input() user!: User;
  @Output() userChange: EventEmitter<User> = new EventEmitter();


  constructor(private subscriptionService : SubscriptionService) { }

  ngOnInit(): void {
  }



  isAnUserTheme(){
    const allUserThemesId = this.user?.subscriptions.map((sub : Subscription) => sub.theme).map((theme : Theme) => theme.id)
    return allUserThemesId.includes(this.theme.id)
  }

  onSubscribe(theme : Theme){
    const subscription = new SubscriptionCreation(this.user.id, theme.id);
    this.subscriptionService.createSubscription(subscription).subscribe({
      next : (res : User) => {this.userChange.emit(res)},
      error : () => {}
    })
  }

  onUnsubscribe(theme : Theme){
    this.subscriptionService.deleteSubscription(this.user.id, theme.id).subscribe({
      next : (res : User) => {this.userChange.emit(res)},
      error : () => {}
    })
  }

}

