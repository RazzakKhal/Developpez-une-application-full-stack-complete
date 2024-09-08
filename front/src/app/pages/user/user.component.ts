import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { snackBarFailConfiguration, SnackBarMessageEnum } from 'src/app/shared/helpers/material.helper';
import { LoginResponse } from 'src/app/shared/models/responses/LoginResponse';
import { UpdateUserForm } from 'src/app/shared/models/UpdateUserForm';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  updateProfilForm! : FormGroup
  user$! : Observable<User>

  constructor(private formBuilder : FormBuilder, private userService : UserService , private router : Router, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
  this.initializeForm()
  this.getUser()
  }

  initializeForm(){
    this.updateProfilForm =  this.formBuilder.group({

      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],

  })

  }

  getUser(){
    this.user$ = this.userService.getUser()
  }

  onSubmit(){
    if(this.updateProfilForm.valid){
      const updateForm = new UpdateUserForm(this.updateProfilForm.value.name, this.updateProfilForm.value.email, this.updateProfilForm.value.password)
      this.userService.updateUser(updateForm).subscribe({
        next : (item : LoginResponse) => {this.changeToken(item)}
      })
    }else{
      snackBarFailConfiguration(this.snackBar, SnackBarMessageEnum.FAIL_FORMULAIRE)

    }

  }

  signOut(){
    if(localStorage.getItem('token')){
      localStorage.removeItem('token');
      this.router.navigateByUrl('');
    }
  }

  changeToken(loginResponse : LoginResponse){
    localStorage.setItem('token' ,loginResponse.token);
  }

}
