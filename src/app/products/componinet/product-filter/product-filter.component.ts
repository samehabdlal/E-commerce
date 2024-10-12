import { Component, HostListener, input, OnInit, signal } from '@angular/core';
import { products } from '../../interface/prodect';
import { ProductService } from '../../service/product.service';
import Aos from 'aos';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss'
})
export class ProductFilterComponent implements OnInit {
  product=signal<products |any> ([])
  index=3
  name=input.required<any>()
  screenWidth: number;
  titel=input.required<any>()
  constructor(private productservice:ProductService){}
  ngOnInit(): void {
    Aos.init
   setTimeout(() => {
    this.getproductfilter()
   }, 1000);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateScreenSize();
  }

  private checkScreenSize(): void {
    if (this.screenWidth< 873 ) {
    } else {

    }
  }
  private updateScreenSize(): void {
    this.screenWidth = window.innerWidth;
    this.checkScreenSize();
  }
  getproductfilter(){
    this.productservice.getprodectfilter(this.name()).subscribe({
      next:(data:any)=>{
    this.product.set(data)
      },
      error:_=>{
        alert('error is back end')
      }
    })
   }
}
