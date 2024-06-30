import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  providers: [AdminService]
})
export class SignInComponent {

//@ts-ignore
regForm: FormGroup;

constructor(private fb:FormBuilder, private adminLogin: AdminService){
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

register(){
  // let form = new FormData();
  // form.set("username",this.regForm.value.username);
  // form.set("password",this.regForm.value.password);
  this.adminLogin.login(this.convertToFormData(this.regForm.value));
  //form.forEach(x=>console.log(x));
//    console.log(this.regForm.value);
//  this.adminLogin.login(this.regForm.value)
}
}
