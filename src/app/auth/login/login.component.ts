import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public email: string = '';
  public password: string = '';
  hidePassword: boolean = true;

  constructor() {
  }

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
