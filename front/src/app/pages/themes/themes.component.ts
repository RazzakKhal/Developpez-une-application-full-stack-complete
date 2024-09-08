import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { snackBarFailConfiguration, SnackBarMessageEnum } from 'src/app/shared/helpers/material.helper';
import { GetThemesResponse } from 'src/app/shared/models/responses/GetThemesResponse';
import { Theme } from 'src/app/shared/models/Theme';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ThemesService } from 'src/app/shared/services/themes.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
})
export class ThemesComponent implements OnInit {

  themes : Theme[] =[]
  user! : User;

  constructor(private themeService : ThemesService, private snackBar : MatSnackBar, private authService : AuthService, private userService : UserService) { }

  ngOnInit(): void {
    this.getAllThemes()
    this.getUser()
  }

  getAllThemes(){
    this.themeService.getAllThemes().subscribe(
      {
        next : (res : GetThemesResponse) => {
          this.themes = res.themes
        },
        error : () => {
          snackBarFailConfiguration(this.snackBar, SnackBarMessageEnum.FAIL_THEME)

        }
      }
    )
  }

  getUser() {
    if (this.authService.isAuthenticate()) {
    this.userService.getUser().subscribe((user : User) => {
      this.user = user
      })
    }
  }

  updateUser(user : User){
    this.user = user;
  }

}
