import { Component } from '@angular/core';
import {RegisterUser} from "../../../types/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor() {
  }

  userRegister: RegisterUser = {
    email:'',
    userName:'',
    password:'',
    confirmPassword:''
  };

  hidePassword: boolean = true;

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  register() {
    if (this.userRegister.password === this.userRegister.confirmPassword) {
      console.log('Username:', this.userRegister.userName);
      console.log('Email:', this.userRegister.email);
      console.log('Password:', this.userRegister.password);

      // You can add your registration logic here
    } else {
      console.error('Passwords do not match');
    }
  }
}
