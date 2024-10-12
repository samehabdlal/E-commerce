import { Component, OnInit, input, output } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  product=input.required<any>()
  allfavorite:any= []
  Client:any
  amount:number=0
  favoriteusre:boolean=false
  favoritebtn=false
Onunvewfav(product:any){
  this.favoritebtn=true
  if (localStorage.getItem('allfavorite')) {
    // Load the data from localStorage
    this.allfavorite = JSON.parse(localStorage.getItem('allfavorite') || '[]');
  } else {
    // Initialize the favorites array if not present in localStorage
    this.allfavorite = [];
  }
  // Check if the product is already in the favorites
  let data = this.allfavorite.find((data: any) => data.id === product.id);
  
  if (data) {
    Swal.fire({
      position: "center",
      icon: "info",
      title: "This product is already in your favorites!",
      showConfirmButton: false,
      timer:1500
    });
  } else {
    // Add the product to the favorites list
    this.favoriteusre=true
    this.allfavorite.push(product);
    // Save the updated favorites list to localStorage
    localStorage.setItem('allfavorite', JSON.stringify(this.allfavorite));
  }
  
  setTimeout(() => {
  this.favoriteusre=false
  }, 1500);
}
  ngOnInit(): void {
    this.Client=JSON.parse(localStorage.getItem('Client') !)
  }
  addbtn:boolean=false
  i=input.required<any>()
  addproduct=output<any>()
  add(){
   this.addproduct.emit({item:this.product() ,quantity:this.amount})
  }
}
