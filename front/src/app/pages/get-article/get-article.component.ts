import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models/Article';
import { Comment } from 'src/app/shared/models/Comment';
import { CreateComment } from 'src/app/shared/models/CreateComment';
import { User } from 'src/app/shared/models/User';
import { ArticleService } from 'src/app/shared/services/article.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommentService } from 'src/app/shared/services/comment.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-get-article',
  templateUrl: './get-article.component.html',
  styleUrls: ['./get-article.component.scss']
})
export class GetArticleComponent implements OnInit {

  article : Article | undefined;
  content = '';
  user! : User

  constructor(private activatedRoute : ActivatedRoute, private articleService : ArticleService, private authService : AuthService, private userService : UserService,
    private commentService : CommentService
  ) { }

  ngOnInit(): void {
    this.getArticle()
    this.getUser()
  }

  getArticle(){
   this.articleService.getArticleById(this.activatedRoute.snapshot.params['id']).subscribe({
    next : (article) => {
      this.article = article
    }
   })
  }



  getUser() {
    if (this.authService.isAuthenticate()) {
    this.userService.getUser().subscribe((user : User) => {
      this.user = user
      })
    }
  }

  addComment(){
    if(this.article?.id && this.content !== ''){
      const comment : CreateComment = new CreateComment(this.content, this.user.id, this.article.id)
      this.commentService.createComment(comment).subscribe({
       next : (item : Comment) => {this.article?.comments.push(item)},
       error : () => {}
      })
    }

  }
}
