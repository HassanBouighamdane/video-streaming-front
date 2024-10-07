import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {AuthRequest} from "../../../../types/Auth";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email: string = '';
  public  password: string = '';

  hidePassword: boolean = true;
  errorMessage: string = '';
  
  constructor(private authService:AuthService,private router:Router) {
  }

  login() {
    const authRequest:AuthRequest={email:this.email,password:this.password};
    this.authService.login(authRequest).subscribe({
      next:(response)=>{
        localStorage.setItem("access_token",response.token);
        this.router.navigateByUrl('/');
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
