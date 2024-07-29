import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) { 
    
  }
  //token = signal<any>("");
  login(body: any): Observable<any>{
    return this.http.post("https://test-env.bigbeetle.net/auth/jwt/login", body);
    // this.http.post("https://test-env.bigbeetle.net/auth/jwt/login",body).subscribe((res)=>{

    //   //console.log(res);
    //   // @ts-ignore
    //   window.localStorage.setItem("tokenKey",res.access_token);
    //   //@ts-ignore
    //   this.token.set(res.access_token);
      // this.router.navigate(["/admindashboard"]);
    // })

  }

  navigateToDashboard() {
    this.router.navigate(["/admindashboard"]);
  }

  getToken() {
    return window.localStorage.getItem("tokenKey");
  }
  setToken(token: string): void {
    localStorage.setItem('tokenKey', token);
  }

  deleteToken() {
    window.localStorage.removeItem("tokenKey");
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


  getUserID(id: any){
    console.log(id);
    let token=window.localStorage.getItem("tokenKey");
    return this.http.get(`https://test-env.bigbeetle.net/users/${id}`,{headers:{
      // @ts-ignore
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }});
  }

  getUserDetails(id: any){
    console.log(id);
    let token=window.localStorage.getItem("tokenKey");
    return this.http.get(`https://test-env.bigbeetle.net/attendances/user/${id}`,{headers:{
      // @ts-ignore
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }});
  }

}


