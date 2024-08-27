import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from '../../models/RegisterForm';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }

  onSubmit() {

    if (this.registerForm.invalid) {
      console.log('cest invalide')
    }else{
      console.log('le register form', this.registerForm)
      const registerForm = new RegisterForm(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password);

    }


}

}
