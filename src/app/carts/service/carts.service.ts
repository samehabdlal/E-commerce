import { HttpClient } from '@angular/common/http';
import { Injectable, model, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  count=signal<any>(0)
  constructor(private http:HttpClient) {
    if('cart' in localStorage){
        this.count.set(JSON.parse(localStorage.getItem('cart')!).length)
          }
    else{
      this.count.set(0)
    }
   }
   creatnewcrat(Model:any){
       return this.http.post('https://fakestoreapi.com/carts',Model)
   }
   getallcats(){
    return this.http.get('https://fakestoreapi.com/carts')
   }
}
