import { Component, ViewChild, viewChild } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-regster',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class registerComponent {
 constructor(private fb:FormBuilder,private auth:AuthService,private router:Router){}
 i:any=0
 @ViewChild('name') usernsme:any
 admin:any='admin'
 selectedFile:any
 regster=this.fb.group({
  name:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required]],
  confirmpassword:['',[Validators.required,this.matchvalues('password')]],
 })
 matchvalues(matchvalue:string):ValidatorFn{
  return (control:AbstractControl)=>{
    return control.value=== control.parent?.get(matchvalue)?.value ? null :{isMatching:true}
  }
   }
   getuser(user:any){
    return this.regster.get(user)
   }
onSubmit(){
  let  data:any={
    "id": `${this.i++}`,
    "email": `${this.regster.controls.email.value}`,
    "password": `${this.regster.controls.password.value}`,
    "name": `${this.regster.controls.name.value}`,
    "role": "customer",
    "avatar": "https://i.imgur.com/imges/download.png",
  }
this.auth.regster(data).subscribe({
  next:(user:any)=>{
   this.router.navigateByUrl('/login')
  },
  error:err=>{
Swal.fire({
    title:'error is valid',
    icon:'error'
})}})}
}
