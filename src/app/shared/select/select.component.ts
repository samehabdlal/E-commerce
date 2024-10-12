import { Component, Input, input, OnInit, output, signal } from '@angular/core';
import { ProductService } from '../../products/service/product.service';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit{
  constructor(private servec:ProductService){}
  ngOnInit(): void {
  this.getallcategories()
  }
  product=output()
  titel=output()
  data=signal([])
  detectchanges(value:any){
    this.titel.emit(value.target.value)
    this.servec.getprodectfilter(value.target.value).subscribe({
     next:(data:any)=>{
       this.product.emit(data)
     }
    })
 }
 getallcategories(){
  this.servec.getallcategories().subscribe({
    next:(data:any)=>{
      this.data.set(data)
    },
    error:err=>{alert(err.message)}
  })
}
}
