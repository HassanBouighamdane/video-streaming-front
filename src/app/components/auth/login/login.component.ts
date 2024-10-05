import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {AuthRequest, AuthResponse} from "../../../../types/Auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private JWT_TOKEN="ACCESS_TOKEN";

  public email: string = '';
  public  password: string = '';

  hidePassword: boolean = true;
  errorMessage: string = '';
  
  constructor(private authService:AuthService) {
  }

  login() {
    const authRequest:AuthRequest={email:this.email,password:this.password};
    this.authService.login(authRequest).subscribe({
      next:(response)=>{
        localStorage.setItem(this.JWT_TOKEN,response.token)
      },
      error:(error)=>{
        this.errorMessage=error.message;
      }
    });

  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
