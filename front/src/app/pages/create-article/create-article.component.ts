import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { snackBarFailConfiguration, SnackBarMessageEnum } from 'src/app/shared/helpers/material.helper';
import { CreateArticle } from 'src/app/shared/models/CreateArticle';
import { CreateArticleResponse } from 'src/app/shared/models/responses/CreateArticleResponse';
import { GetThemesResponse } from 'src/app/shared/models/responses/GetThemesResponse';
import { Theme } from 'src/app/shared/models/Theme';
import { User } from 'src/app/shared/models/User';
import { ArticleService } from 'src/app/shared/services/article.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ThemesService } from 'src/app/shared/services/themes.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {

  articleForm!: FormGroup;
  user! : User;
  themes : Theme[] =[]


  constructor(private formBuilder: FormBuilder, private authService : AuthService, private router : Router, private snackBar : MatSnackBar, private userService : UserService, private articleService : ArticleService, private themeService : ThemesService) { }

  ngOnInit(): void {
    this.getUser();
    this.getAllThemes();
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', [Validators.required]],
      theme: ['', [Validators.required]],
  });
  }

  onSubmit() {

    if (this.articleForm.invalid) {
      snackBarFailConfiguration(this.snackBar, SnackBarMessageEnum.FAIL_FORMULAIRE)

    }else{
      const articleForm = new CreateArticle(this.articleForm.value.title, this.articleForm.value.content, this.articleForm.value.theme, this.user.id);
      this.articleService.createArticle(articleForm).subscribe(
        {
          next : (res : CreateArticleResponse) => {this.router.navigateByUrl('/articles') },
          error : () => {snackBarFailConfiguration(this.snackBar, SnackBarMessageEnum.FAIL_CREATE_ARTICLE);}
        })
    }


}

getUser() {
  if (this.authService.isAuthenticate()) {
  this.userService.getUser().subscribe((user : User) => {
    this.user = user
    })
  }
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

}
