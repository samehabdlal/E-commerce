import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/componinet/carts/carts.component';
import { HomeComponent } from './home/home.component';
import { ProductsDetailsComponent } from './products/componinet/products-details/products-details.component';
import { AllproductComponent } from './products/componinet/allproduct/allproduct.component';
import { registerComponent } from './Auth/componinet/register/register.component';
import { LoginComponent } from './Auth/componinet/login/login.component';
import { authGuard } from './Auth/componinet/Guards/auth.guard';
import { ProductfavoriteComponent } from './products/componinet/productfavorite/productfavorite.component';

const routes: Routes = [
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[authGuard],
    children:[
      {path:'cart',component:CartsComponent},
      {path:'product/:id',component:ProductsDetailsComponent},
      {path:'product',component:AllproductComponent,},  
      {path:'favorite',component:ProductfavoriteComponent,},  
    ]
   },
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'home',component:HomeComponent},
   {path:'register',component:registerComponent},
   {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'home',pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
