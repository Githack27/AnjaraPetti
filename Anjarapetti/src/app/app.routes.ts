import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { CartComponent } from './Pages/cart/cart.component';
import { AuthComponent } from './Pages/auth/auth.component';
import { CareerComponent } from './Pages/career/career.component';
import { PartnerComponent } from './Pages/partner/partner.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '/shop', component: ShopComponent},
  { path: '/cart', component: CartComponent},
  { path: '/authentication', component: AuthComponent},
  { path: '/career', component: CareerComponent},
  { path: '/partners', component: PartnerComponent}
];
