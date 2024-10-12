import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './componinet/carts/carts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class CartsModule { }
