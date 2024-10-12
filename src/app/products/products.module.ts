import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AllproductComponent } from './componinet/allproduct/allproduct.component';
import { ProductsDetailsComponent } from './componinet/products-details/products-details.component';
import { ProductFilterComponent } from './componinet/product-filter/product-filter.component';
import { HomeComponent } from '../home/home.component';
import { LoadingProductComponent } from './componinet/loading-product/loading-product.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './componinet/product/product.component';
import { ProductfavoriteComponent } from './componinet/productfavorite/productfavorite.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SelectComponent } from '../shared/select/select.component';
@NgModule({
  declarations: [
    AllproductComponent,
    ProductsDetailsComponent,
    ProductFilterComponent,
    HomeComponent,
    LoadingProductComponent,
    ProductComponent,
    ProductfavoriteComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
],
  exports:[
    AllproductComponent,
    ProductsDetailsComponent,
    ProductFilterComponent,
    HomeComponent,
    LoadingProductComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class ProductsModule { }
