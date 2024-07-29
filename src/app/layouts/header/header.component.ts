import { ChangeDetectorRef, Component, OnInit ,effect, inject, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs/internal/Observable';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers:[AdminService]
})
export class HeaderComponent {

 //adminService = inject(AdminService); 

  //token = signal<any>("");
  // ngOnInit(){
  //   //@ts-ignore
  //   this.token = window.localStorage.getItem("tokenKey");
  // }

  //@ts-ignore
  isAuthenticated: boolean;

  constructor(private adminService: AdminService, private authService: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.checkAuthentication();
    console.log("I am running now")
  }

  checkAuthentication() {
    this.isAuthenticated = !!this.adminService.getToken();
    this.cdr.detectChanges(); // Ensure change detection runs
  }

  logout() {
    this.authService.logout();
    this.adminService.deleteToken();
    this.checkAuthentication(); // Re-check authentication status
  }

  // ngOnInit() {
  //   this.isAuthenticated = !!this.adminService.getToken();
  // }

  // logout() {
  //   this.adminService.deleteToken();
  //   this.isAuthenticated = !!this.adminService.getToken();
  // }

}
