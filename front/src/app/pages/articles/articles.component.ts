import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  constructor(private articleService : ArticleService, private authService : AuthService, private userService : UserService) { }

  ngOnInit(): void {
    this.getUser()

  }


  getAllArticles(){
    this.articleService.getUserSubscribedArticles(this.user.id).subscribe({
      next : (item : any) => {this.articles = item; console.log(this.articles)},
      error : () => {}
    })
  }

  getUser() {
    if (this.authService.isAuthenticate()) {
    this.userService.getUser().subscribe((user : User) => {
      this.user = user
      this.getAllArticles()
      })
    }
  }
}
