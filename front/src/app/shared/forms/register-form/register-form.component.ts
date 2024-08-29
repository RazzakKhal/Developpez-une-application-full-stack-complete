import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from '../../models/RegisterForm';
import { AuthService } from '../../services/auth.service';
import { RegisterResponse } from '../../models/responses/RegisterResponse';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { snackBarFailConfiguration, SnackBarMessageEnum } from '../../helpers/material.helper';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService : AuthService, private router : Router, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
  });
  }

  onSubmit() {

    if (this.registerForm.invalid) {
      snackBarFailConfiguration(this.snackBar, SnackBarMessageEnum.FAIL_FORMULAIRE)

    }else{
      const registerForm = new RegisterForm(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password);
      this.authService.register(registerForm).subscribe(
        {
          next : (res : RegisterResponse) => {this.authService.setToken(res.token); this.router.navigateByUrl("/articles"); },
          error : () => {snackBarFailConfiguration(this.snackBar, SnackBarMessageEnum.FAIL_INSCRIPTION);}
        })

    }


}

}
