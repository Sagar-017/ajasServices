import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers:[AdminService]
})
export class HeaderComponent {

 adminService = inject(AdminService); 

  token = signal<any>("");
  // ngOnInit(){
  //   //@ts-ignore
  //   this.token = window.localStorage.getItem("tokenKey");
  // }
  

  constructor(public admnnSrs: AdminService){
    // effect(()=> {
    //   this.token.set(this.adminService.getToken());
    //   console.log(this.token);
    // })
  }

  logout(){
    
      this.adminService.deleteToken();
    console.log("mai logiyt")

  }

}
