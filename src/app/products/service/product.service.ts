import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { products } from '../interface/prodect';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  lengthproduct=signal(0)
  vew=signal<boolean>(true)
  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();
  changeData(data: any) {
    this.dataSource.next(data);
  }
  url='https://fakestoreapi.com/products/'
  getallproduct(){
    return this.http.get(this.url)
   }
   getallcategories(){
    return this.http.get(this.url+'categories')
    }
  getproductdetails(id:number){
    return this.http.get(this.url+id)
   }
   addnewproduct(product:any){
    return this.http.post('https://fakestoreapi.com/products',product)
   }
 getprodectfilter(name:any){
 return this.http.get(`${this.url}category/${name}`)
}
updateproduct(id:number,product:products | any){
  return this.http.put(this.url+id,product)
 }
}

