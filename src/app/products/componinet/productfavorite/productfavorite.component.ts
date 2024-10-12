import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productfavorite',
  templateUrl: './productfavorite.component.html',
  styleUrl: './productfavorite.component.scss'
})
export class ProductfavoriteComponent implements OnInit {
  allfavorite:any=[]
  getallfavorite(){
    this.allfavorite=JSON.parse(localStorage.getItem('allfavorite') !) ||[]
  }
  ngOnInit(): void {
   this.getallfavorite()
   console.log(this.allfavorite);
  }
  deletfavorite(product:any){
      // Filter out the product from the favorites list
      this.allfavorite = this.allfavorite.filter((data: any) => data.id !== product.id);
      // Update localStorage with the new favorites list
      localStorage.setItem('allfavorite', JSON.stringify(this.allfavorite));
  }
}
