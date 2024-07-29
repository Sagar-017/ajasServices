import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../layouts/header/header.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  providers: [AdminService]
})


export class SignInComponent {

//@ts-ignore
regForm: FormGroup;
//@ts-ignore
  isAuthenticated: boolean;

constructor(private fb:FormBuilder, private adminService: AdminService, private authService: AuthService,
  private router: Router,
  private cdr: ChangeDetectorRef){
}

ngOnInit(){
  this.regForm = this.fb.group ({
    username: [''],
    password: ['']
  })
}

private convertToFormData(formValue: any): FormData {
  const formData: FormData = new FormData();
  for (const key in formValue) {
    // if (formValue.hasOwnProperty(key)) {
      formData.set(key, formValue[key]);
    // }
  }
  console.log(formData.get("username"),formData.get("password"))
  return formData;
}
register() {
  const formData = this.convertToFormData(this.regForm.value);

  this.adminService.login(formData).subscribe({
    next: (res: any) => {
      if (res && res.access_token) {
        this.authService.login(this.regForm.value.username, this.regForm.value.password);
        this.adminService.setToken(res.access_token);
        this.cdr.detectChanges(); // Trigger change detection
        this.router.navigate(['/admindashboard']);
      } else {
        alert('Invalid credentials');
      }
    },
    error: (error) => {
      console.error('Login error', error);
      alert('Invalid credentials');
    }
  });
}
}

//My register function
// register(){
//   // let form = new FormData();
//   // form.set("username",this.regForm.value.username);
//   // form.set("password",this.regForm.value.password);
  
  
//   this.adminLogin.login(this.convertToFormData(this.regForm.value));
  
//   //form.forEach(x=>console.log(x));
// //    console.log(this.regForm.value);
// //  this.adminLogin.login(this.regForm.value)
// }


// export class SignInComponent implements OnInit {
//   //@ts-ignore
//   regForm: FormGroup;

//   constructor(private fb: FormBuilder, private authService: AuthService, private adminService: AdminService) {}

//   ngOnInit() {
//     this.regForm = this.fb.group({
//       username: [''],
//       password: ['']
//     });
//   }

//   private convertToFormData(formValue: any): FormData {
//     const formData: FormData = new FormData();
//     for (const key in formValue) {
//       formData.set(key, formValue[key]);
//     }
//     return formData;
//   }

//   register() {
//     // const formData = this.convertToFormData(this.regForm.value);
//     // this.adminService.login(formData);
//     const formData = this.regForm.value;
//     this.adminService.login(formData).subscribe(
//       (res: any) => {
//         window.localStorage.setItem("tokenKey", res.access_token);
//         this.adminService.navigateToDashboard();
//       },
//       (error: any) => {
//         console.error('Login failed:', error);
//       }
//     );
//   }
// }