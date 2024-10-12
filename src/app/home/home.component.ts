import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import Aos from 'aos';
import { ProductService } from '../products/service/product.service';
import { products } from '../products/interface/prodect';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit  {
  constructor(private productservice:ProductService){}
  clothing="men's clothing"
  vew=this.productservice.vew()
  
 details=[
  {icon:'fa-regular fa-gem',titel:'jewelry',Description:'We have the best amazing jewelry'},
  {icon:'fa-solid fa-phone',titel:'Communication',Description:'We have the best amazing jewelry'},
  {icon:'fa-solid fa-wand-magic-sparkles',titel:'Improvements',Description:'We have the best amazing jewelry'},
 ]
  ngOnInit(): void {
     let admin=JSON.parse(localStorage.getItem('Client')!)
    this.productservice.changeData(admin)
    Aos.init()
   setTimeout(() => {
    this.vew=false
   }, 1000);
  }
}
