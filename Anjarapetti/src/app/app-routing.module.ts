import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { CartComponent } from './Pages/cart/cart.component';



@NgModule({
  imports: [
    CommonModule,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    BrowserModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
