import { Component, TemplateRef } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  providers:[AdminService,DatePipe]
})
export class AdminDashboardComponent {

  isEmptyObject(obj:any) {
    return (obj && (Object.keys(obj).length === 0));
  }

  userDa: any=[];
  userID: any=[];
  userDetails: any;
  
  JSON: JSON;
getUserDetails: any;


  showDetails(idU:any){
    console.log(idU);
    this.adminS.getUserDetails(idU).subscribe(data => {
      this.userDetails = data;
      console.log('User details:', this.userDetails);
    });
  }

  ngOnInit():void{

  }

  constructor(private adminS: AdminService){
    adminS.userData((data:any)=>{
      this.userDa=data;
      //console.log(data) 
    });
    //adminS.userDetails(this.userdetails)
   this.JSON=JSON;
  }

}