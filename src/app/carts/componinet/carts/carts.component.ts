import { Component, OnInit, signal } from '@angular/core';
import { CartsService } from '../../service/carts.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss',
})
export class CartsComponent implements OnInit {
  constructor(private cartservice:CartsService){}
  cartproducts = signal<any>([]);
  total = 0
  Client:any
  allcarts:any=''
  success=true
  ngOnInit(): void {
    this.getallcarts()
  this.Client=JSON.parse(localStorage.getItem('Client') !)
  this.getcartproducts();
  }
  // get products is localstoreg
  getcartproducts() {
    if ('cart' in localStorage) {
      let cartproduct = JSON.parse(localStorage.getItem('cart')!);
      this.cartproducts.set(cartproduct);
    }
    this.getcarttotal();
  }
  // clear all data in localstoreg 
  clearshoppincart() {
    localStorage.removeItem('cart');
    this.cartproducts.set([]);
    this.getcarttotal()
    this.cartservice.count.set(0)
  }
  // delet product
  deletitem(i: any) {
    this.cartproducts().splice(i,1)
    localStorage.setItem('cart', JSON.stringify(this.cartproducts()));
    this.cartservice.count.set(JSON.parse(localStorage.getItem('cart') !).length)
    this.getcarttotal()
  }
  // add in cart quantity
  addquantity(i: number) {
    this.cartproducts()[i].quantity++
    this.getcarttotal()
    localStorage.setItem('cart', JSON.stringify(this.cartproducts()));
  }
  // mins in cart quantity
  minsquantity(i: any) {
    if (this.cartproducts()[i].quantity > 0) {
      this.cartproducts()[i].quantity--;
      this.getcarttotal();
      localStorage.setItem('cart', JSON.stringify(this.cartproducts()));
    }
  }
  // update input is change
  detectchange(){
    localStorage.setItem('cart', JSON.stringify(this.cartproducts()));
    this.getcarttotal();
  }
  // all total is price
  getcarttotal() {
    this.total=0
    for (let to in this.cartproducts()) {
      this.total+=Math.floor(this.cartproducts()[to].item.price * this.cartproducts()[to].quantity) 
    }
  }
  addcrat(){
    let product=this.cartproducts().map((item:any)=>{
      return {productId:item.item.id,quantity:item.quantity}
    })
    let Model={
      userId:4,
      date:new Date(),
      products:product
    }
    this.cartservice.creatnewcrat(Model).subscribe({
      next:data=>{
         this.success=false
         Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 2000
        });
        this.clearshoppincart()
      }
    })
  }
  getallcarts(){
    this.cartservice.getallcats().subscribe({
      next:(data:any)=>{
            this.allcarts=data
      }
    })
  }
}
