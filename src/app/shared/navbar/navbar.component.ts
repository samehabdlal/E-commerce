import { Component, HostListener, Input, input, OnInit, signal } from '@angular/core';
import Aos from 'aos';
import { AuthService } from '../../Auth/service/auth.service';
import { ProductService } from '../../products/service/product.service';
import { CartsService } from '../../carts/service/carts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  implements OnInit{
  constructor(public auth:AuthService ,public cartservice:CartsService,public productservice:ProductService ) {
    this.updateScreenSize();
  }
  screenWidth: number;
  screenHeight?: number;
  username:any=this.auth.CurrentUser()?.name
  vew:boolean=true
  close=false
  Client:any
  ngOnInit(): void {
    this.productservice.currentData.subscribe(data=>{
      this.Client=data
    })
    Aos.init()
    setTimeout(() => {
      this.vew=true
    }, 1000);
    console.log(this.screenWidth);
    } 
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateScreenSize();
  }
  private checkScreenSize(): void {
    if (this.screenWidth < 873 ) {
      this.close=false
    } else {
      this.close=true
    }
  }
  private updateScreenSize(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.checkScreenSize();
  }
  public toggleNavbars() : void{
    this.close= true
  }
  public toggclosenavbar() : void{
    this.close=false
  }
  Onlogout(){
    this.auth.logout()
  }
}
