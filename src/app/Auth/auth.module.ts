import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componinet/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerComponent } from './componinet/register/register.component';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [
    registerComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports:[
    registerComponent,
    LoginComponent,
  ]
})
export class AuthModule { }
