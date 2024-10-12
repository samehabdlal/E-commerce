import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './Auth/auth.module';
import { CartsModule } from './carts/carts.module';
// register Swiper custom elements
register();
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule, AppRoutingModule,NgxSkeletonLoaderModule,SharedModule,
    AuthModule,
    ProductsModule,
    CartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
