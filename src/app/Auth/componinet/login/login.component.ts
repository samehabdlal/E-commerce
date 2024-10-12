import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router){}
  login=this.fb.group({
   email:[''],
   password:[''],
  })
 onSubmit(){
 let  data:any={
  email: this.login.controls.email.value,
  password:this.login.controls.password.value
}

 this.auth.login(data).subscribe({
   next:(user:any)=>{
    this.router.navigateByUrl('/home')
   },
   error:err=>{
    Swal.fire({
      title: 'email in valid',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
   }
 })
 }
 onaddtype(type:any){
  localStorage.setItem('Client',JSON.stringify(type.target.value))
}}
