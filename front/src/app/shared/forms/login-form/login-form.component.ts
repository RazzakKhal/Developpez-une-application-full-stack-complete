import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginForm } from '../../entities/LoginForm';
import { LoginResponse } from '../../models/responses/LoginResponse';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { snackBarFailConfiguration, SnackBarMessageEnum } from '../../helpers/material.helper';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm! : FormGroup

  constructor(private formBuilder : FormBuilder, private authService : AuthService , private router : Router, private snackBar : MatSnackBar) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  onSubmit(){
   if(this.loginForm.invalid){
    snackBarFailConfiguration(this.snackBar, SnackBarMessageEnum.FAIL_FORMULAIRE)
   }else{

    const loginForm = new LoginForm(this.loginForm.value.email, this.loginForm.value.password)

    this.authService.login(loginForm).subscribe(
      {
        next : (res : LoginResponse) => {
          this.authService.setToken(res.token); this.router.navigateByUrl("/articles")
        },
        error : () => {
          snackBarFailConfiguration(this.snackBar, SnackBarMessageEnum.FAIL_CONNEXION)
        }
      }
    )
   }
  }

}
