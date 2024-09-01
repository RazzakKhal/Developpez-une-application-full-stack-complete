import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../../models/Theme';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { Subscription } from '../../models/Subscription';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  @Input() theme!: Theme
  @Input() user!: User;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }



  isAnUserTheme(){

    const allUserThemesId = this.user.subscriptions.map((sub : Subscription) => sub.theme).map((theme : Theme) => theme.id)
    return allUserThemesId.includes(this.theme.id)
  }

}

