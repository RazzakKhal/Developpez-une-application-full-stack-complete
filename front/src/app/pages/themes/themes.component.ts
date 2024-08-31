import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { snackBarFailConfiguration, SnackBarMessageEnum } from 'src/app/shared/helpers/material.helper';
import { GetThemesResponse } from 'src/app/shared/models/responses/GetThemesResponse';
import { Theme } from 'src/app/shared/models/Theme';
import { ThemesService } from 'src/app/shared/services/themes.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  themes : Theme[] =[]

  constructor(private themeService : ThemesService, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.getAllThemes()
  }

  getAllThemes(){
    this.themeService.getAllThemes().subscribe(
      {
        next : (res : GetThemesResponse) => {
          this.themes = res.themes
          console.log('les themes', this.themes)
        },
        error : () => {
          snackBarFailConfiguration(this.snackBar, SnackBarMessageEnum.FAIL_THEME)

        }
      }
    )
  }

}
