import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticatedFlag = false;

  isAuthenticated(): boolean {
    console.log("inside is Authenticated")
    return this.isAuthenticatedFlag;
  }

  login(username: string, password: string): boolean {
    
    if (username === 'admin' && password === 'admin') { 
      this.isAuthenticatedFlag = true;
      console.log("Before is AuthenticatedFlag")
    }
    console.log("Before is AuthenticatedFlag")
    return this.isAuthenticatedFlag;
  }

  logout(): void {
    this.isAuthenticatedFlag = false;
  }
}
