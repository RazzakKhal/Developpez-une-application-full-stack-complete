import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm! : FormGroup

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      name : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  onSubmit(){
   if(this.loginForm.valid){
    console.log('cest valide')
   }else{
    console.log('cest pas valide')
   }
  }

}
