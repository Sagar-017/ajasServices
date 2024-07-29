import { ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DatePipe } from '@angular/common';
import { HeaderAdminComponent } from "./layouts/header-admin/header-admin.component";
import { FooterAdminComponent } from "./layouts/footer-admin/footer-admin.component";


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [DatePipe, HeaderAdminComponent, FooterAdminComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  providers:[AdminService,DatePipe]
})
export class AdminDashboardComponent {

  isEmptyObject(obj:any) {
    return (obj && (Object.keys(obj).length === 0));
  }


  userDa: any=[];
  userID: any;
  userDetails: any;
  
  JSON: JSON;
getUserDetails: any;


  showDetails(idU:any){
    console.log(idU);
    // this.userID=idU;
    // console.log('User ID :',this.userID);
    this.adminService.getUserID(idU).subscribe(data => {
      this.userDetails = data;
      console.log('User details:', this.userDetails);
    });
  }
  constructor(private adminService: AdminService){
    adminService.userData((data:any)=>{
      this.userDa=data;
      //console.log(data) 
    });
   this.JSON=JSON;
  }

}