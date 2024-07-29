import { ChangeDetectorRef, Component, OnInit ,effect, inject, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AdminService } from '../../../../services/admin.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css'
})
export class HeaderAdminComponent {

  // //@ts-ignore
  // isAuthenticated: boolean;

  constructor(private adminService: AdminService, private authService: AuthService, private cdr: ChangeDetectorRef) {}

  // ngOnInit() {
  //   this.checkAuthentication();
  //   console.log("I am running now")
  // }

  // checkAuthentication() {
  //   this.isAuthenticated = !!this.adminService.getToken();
  //   this.cdr.detectChanges(); // Ensure change detection runs
  // }

  // logout() {
  //   this.authService.logout();
  //   this.adminService.deleteToken();
  //   this.checkAuthentication(); // Re-check authentication status
  // }

  logout() {
    this.authService.logout();
     this.adminService.deleteToken();
  //   this.checkAuthentication(); // Re-check authentication status
   }

}
