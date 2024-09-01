import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotConnected } from 'src/app/shared/interfaces/notConnected';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements NotConnected,  OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.redirectToArticles();
  }

  redirectToArticles(): void {
    if(this.authService.isAuthenticate()){
      this.router.navigateByUrl('/articles');

    }
  }



}
