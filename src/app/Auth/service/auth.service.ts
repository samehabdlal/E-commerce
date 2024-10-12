import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../interface/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient,private router:Router) { }
  CurrentUser=signal<User | null>(null);
  regster(data:any){
    return this.http.post('https://api.escuelajs.co/api/v1/users',data).pipe(
      map((user:any)=>{
        if(user){
        }
      })
    )
  }
  login(data:any){
    return this.http.post('https://api.escuelajs.co/api/v1/auth/login',data).pipe(
      map((user:any)=>{
        console.log(user);
        
        if(user){
        this.getprofile(user.access_token).subscribe({
          next:(user:any)=>{
               if(user){
                localStorage.setItem('user',JSON.stringify(user))
                this.CurrentUser.set(user)
                console.log(user);
               }
          }
        })
        }
      })
    )
  }

  getprofile(token:any){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get('https://api.escuelajs.co/api/v1/auth/profile',{headers})
  }
  logout(){
    localStorage.removeItem('user')
    this.CurrentUser.set(null)
    this.router.navigateByUrl('/login')
  }
}
