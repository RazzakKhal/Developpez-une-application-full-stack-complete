import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotConnected } from 'src/app/shared/interfaces/notConnected';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements NotConnected, OnInit {
  constructor(private router : Router, private authService : AuthService) {}



  ngOnInit(): void {
    this.redirectToArticles();
  }

  redirectToArticles(): void {
    if(this.authService.isAuthenticate()){
      this.router.navigateByUrl('/articles');

    }
  }
}
