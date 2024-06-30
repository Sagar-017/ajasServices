import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) { 
    
  }
  token = signal<any>("");
  login(body: any){
    this.http.post("https://test-env.bigbeetle.net/auth/jwt/login",body).subscribe((res)=>{

      //console.log(res);
      // @ts-ignore
      window.localStorage.setItem("tokenKey",res.access_token);
      //@ts-ignore
      this.token.set(res.access_token);
      this.router.navigate(["/admindashboard"]);
    })

  }

  getToken(){
    console.log(this.token());
    return this.token();

  }
  deleteToken(){
    this.token.update(()=>"");
  }

  userData(callback:any){
    //@ts-ignore
    let token=window.localStorage.getItem("tokenKey");
    const headers = new Headers()
    this.http.get("https://test-env.bigbeetle.net/attendances/",{headers:{
      // @ts-ignore
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }}).subscribe(

      (res)=>{

        //console.log(res);
        callback(res);
        // @ts-ignore

      }
    )
  }


  getUserDetails(id: any){
    console.log(id);
    let token=window.localStorage.getItem("tokenKey");
    return this.http.get(`https://test-env.bigbeetle.net/users/${id}`,{headers:{
      // @ts-ignore
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }});
  }

}
