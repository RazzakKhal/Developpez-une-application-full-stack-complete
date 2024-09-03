import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models/Article';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-get-article',
  templateUrl: './get-article.component.html',
  styleUrls: ['./get-article.component.scss']
})
export class GetArticleComponent implements OnInit {

  article! : Observable<Article>;

  constructor(private activatedRoute : ActivatedRoute, private articleService : ArticleService) { }

  ngOnInit(): void {
    this.getArticle()
  }

  getArticle(){
   this.article = this.articleService.getArticleById(this.activatedRoute.snapshot.params['id'])
  }

}
