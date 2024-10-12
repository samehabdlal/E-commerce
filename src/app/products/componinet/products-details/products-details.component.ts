import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../interface/prodect';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent implements OnInit {
  product?:products | any
constructor(private ActivatedRoute:ActivatedRoute ,private service:ProductService){}
  ngOnInit(): void {
    this.getidurl()
    this.getproduct()
  }
  id?:any
  getidurl(){
    this.ActivatedRoute.params.subscribe({
      next:data=>{
       this.id=data['id']
      }
    })
  }
  getproduct(){
    this.service.getproductdetails(this.id).subscribe({
      next:(data:any)=>{
       this.product=data
       console.log(data);
      }
    })
  }
}
