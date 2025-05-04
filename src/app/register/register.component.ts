import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm: FormGroup;
  hide: boolean = true;
  constructor(private _formBuilder: FormBuilder, private _route: Router) {
  }

  ngOnInit(){
    this.initializeRegistrationForm();
  }

  initializeRegistrationForm(){
    this.registrationForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  login(){
    this._route.navigate(['/login']);
  }
}

