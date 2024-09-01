import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../../models/Theme';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
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


  constructor(private subscriptionService : SubscriptionService) { }

  ngOnInit(): void {
  }



  isAnUserTheme(){

    const allUserThemesId = this.user.subscriptions.map((sub : Subscription) => sub.theme).map((theme : Theme) => theme.id)
    return allUserThemesId.includes(this.theme.id)
  }

  onSubscribe(theme : Theme){
    const subscription = new SubscriptionCreation(this.user.id, theme.id);
    this.subscriptionService.createSubscription(subscription).subscribe({
      next : (res) => {console.log('la response', res)},
      error : () => {}
    })
  }

  onUnsubscribe(theme : Theme){

  }

}

