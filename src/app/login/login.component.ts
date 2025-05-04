import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginRegisterForm: FormGroup;
  hide: boolean = true;
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(){
    this.initializeLoginRegistrationForm();
  }

  initializeLoginRegistrationForm(){
    this.loginRegisterForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
}
