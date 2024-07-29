import { Component, Input, input } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
  providers:[AdminService]
})
export class UserEditComponent {

  @Input() idU!:string;

  ngOnInit(){
    console.info("id: ", this.idU);
    this.adminS.getUserDetails(this.idU).subscribe(data => {
      this.userDetails = data;
      console.log('User details:', this.userDetails);
    });
  }

  userDetails: any;
  userDa: any=[];
  JSON: JSON;

  showData(){
    
  }

  constructor(private adminS: AdminService){
    // adminS.userData((data:any)=>{
    //   this.userDa=data;
    //   //console.log(data) 
    // });
    
    this.JSON=JSON;
  }
}
