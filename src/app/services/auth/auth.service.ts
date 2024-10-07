import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { catchError, Observable, throwError} from "rxjs";
import {AuthRequest, AuthResponse} from "../../../types/Auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL="http://localhost:8081/api/auth";
  public isAuthenticated:boolean=false;
  constructor(private  http:HttpClient) { }

  public login(authRequest:AuthRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.API_URL}/login`,authRequest)
    .pipe(catchError(this.handleError));
  }

  
  public logout(){
    localStorage.removeItem("access_token");
  }

  private handleError(error: HttpErrorResponse) {
 
    return throwError(() => new Error('Something went wrong!'));
  }
}
