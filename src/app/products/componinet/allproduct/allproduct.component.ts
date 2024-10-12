import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { products } from '../../interface/prodect';
import Swal from 'sweetalert2'
import { CartsService } from '../../../carts/service/carts.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.scss'
})
export class AllproductComponent implements OnInit {
constructor(public servec:ProductService,public cart:CartsService,private fb:FormBuilder){}
ngOnInit(): void {
  this.getallprodect()
  this.admin=JSON.parse(localStorage.getItem('Client') !)
 }
 toggleupdating=false
 itemupdate:any
creatproduct=this.fb.group({
  title:['',Validators.required],
  price:['' ,Validators.required],
  description:['',Validators.required],
  image:['',Validators.required],
  category:['',Validators.required],
})
  prodect=signal<products | any>([])
  titel:any
  hase46:any
  total=0
  admin:any
  categories=signal<products | any>([])
  cartproduct:any[]=[]

getallprodect(){
  this.servec.getallproduct().subscribe({
    next:(data:any)=>{
      this.prodect.set(data)
    },
    error:err=>{alert(err.message)}
  })
}
  getfiterdata(data:any){
    this.creatproduct.get('category')?.patchValue(this.titel);
    ( this.titel=='all' )? this.getallprodect() :  this.prodect.set(data)
   }
// TODO ////////////  add cart
   addtocart(event:any){
    if('cart' in localStorage ){
    this.cartproduct=JSON.parse(localStorage.getItem('cart') !)
    let exzist=this.cartproduct.find(item=>item.item.id==event.item.id)
    if(exzist){
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "product orade item",
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
      this.cartproduct.push(event)
      localStorage.setItem('cart',JSON.stringify(this.cartproduct))
      this.cart.count.set(JSON.parse(localStorage.getItem('cart') !).length)
    }
    }
    else{
      this.cartproduct.push(event)
      localStorage.setItem('cart',JSON.stringify(this.cartproduct))
    }
   }
// TODO //////////// END add cart
getimgpath(event:any){
  const file=event.target.files[0]
  const reader=new FileReader()
  reader.readAsDataURL(file)
  reader.onload=()=>{
   this.hase46=reader.result
  this.creatproduct.get('image')?.patchValue(this.hase46);
  }
}
addproduct(){
  if(this.toggleupdating==false){
    this.servec.addnewproduct(this.creatproduct.value).subscribe(data=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "The created product successfully",
        showConfirmButton: false,
        timer: 1500
      });
      this.creatproduct.reset()
    })
  }
  if(this.toggleupdating==true){
    this.servec.updateproduct(this.itemupdate.id,this.creatproduct.value).subscribe(data=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: " updated successfully",
        showConfirmButton: false,
        timer: 1500
      });
    })
    this.toggleupdating=false
  }
}
Onupdate(item:any){
  this.creatproduct.patchValue({
    title:item.title,
    price:item.price,
    description:item.description,
    image:item.image,
    category:item.category
  })
  this.hase46=item.image
  this.toggleupdating=true
  this.itemupdate=item
}
closemodal(){
  this.creatproduct.reset()
  this.hase46=''
}
}
