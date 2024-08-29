import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { snackBarFailConfiguration } from 'src/app/shared/helpers/material.helper';
import { NotConnected } from 'src/app/shared/interfaces/notConnected';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements NotConnected,  OnInit {

  constructor(private authService : AuthService, private router : Router, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.redirectToArticles();
  }

  redirectToArticles(): void {
    if(this.authService.isAuthenticate()){
      this.router.navigateByUrl('/articles');

    }
  }



}
