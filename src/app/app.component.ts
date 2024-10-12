import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from './products/service/product.service';
import { AuthService } from './Auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ecomercs';
  constructor(private productservice:ProductService,private authservice:AuthService,private router:Router){}
  ngOnInit(): void {
    
    this.setcurrentuser()
    setTimeout(() => {
   this.productservice.vew.set(false)
    }, 1000);
  }
  setcurrentuser(){
 const userstring=localStorage.getItem("user")
 if(!userstring) return
  const user= JSON.parse(userstring);
  this.authservice.CurrentUser.set(user)
}
}
