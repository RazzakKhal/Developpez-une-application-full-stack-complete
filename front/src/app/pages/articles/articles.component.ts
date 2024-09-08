import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Article } from 'src/app/shared/models/Article';
import { User } from 'src/app/shared/models/User';
import { ArticleService } from 'src/app/shared/services/article.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  articles : Article[] = []
  user! : User;

  constructor(private articleService : ArticleService, private authService : AuthService, private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    this.getUserAndArticles()

  }



  getUserAndArticles() {
    if (this.authService.isAuthenticate()) {
    this.userService.getUser().pipe(
      mergeMap((item : User) => {
        this.user = item
       return this.articleService.getUserSubscribedArticles(this.user.id)
      })
    ).subscribe((articles : Article[]) => {
        this.articles = articles;
      })
    }
  }

  redirectToTheArticle(article : Article){
    this.router.navigateByUrl(`/articles/${article.id}`)
  }
}
