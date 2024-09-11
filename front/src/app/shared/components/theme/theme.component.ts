import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Theme } from '../../models/Theme';
import { User } from '../../models/User';
import { Subscription } from '../../models/Subscription';
import { SubscriptionCreation } from '../../entities/Subscription';
import { SubscriptionService } from '../../services/subscription.service';
import { snackBarFailConfiguration, SnackBarMessageEnum } from '../../helpers/material.helper';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  @Input() theme!: Theme
  @Input() user!: User;
  @Output() userChange: EventEmitter<User> = new EventEmitter();


  constructor(private subscriptionService : SubscriptionService, private snackBar : MatSnackBar) { }


  ngOnInit(): void {
  }



  isAnUserTheme(){
    const allUserThemesId = this.user?.subscriptions.map((sub : Subscription) => sub.theme).map((theme : Theme) => theme.id)
    return allUserThemesId ? allUserThemesId.includes(this.theme.id) : false;
  }

  onSubscribe(theme : Theme){
    const subscription = new SubscriptionCreation(this.user.id, theme.id);
    this.subscriptionService.createSubscription(subscription).subscribe({
      next : (res : User) => {this.userChange.emit(res)},
      error : () => {
        snackBarFailConfiguration(this.snackBar, SnackBarMessageEnum.FAIL_SUBSCRIBE)
      }
    })
  }

  onUnsubscribe(theme : Theme){
    this.subscriptionService.deleteSubscription(this.user.id, theme.id).subscribe({
      next : (res : User) => {this.userChange.emit(res);},
      error : () => {
        snackBarFailConfiguration(this.snackBar, SnackBarMessageEnum.FAIL_UNSUBSCRIBE)
      }
    })
  }

}

