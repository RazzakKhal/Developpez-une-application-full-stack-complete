import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../../models/Article';
import { User } from '../../models/User';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article!: Article
  @Input() user!: User;
  @Output() articlesChange: EventEmitter<Article[]> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }




}
