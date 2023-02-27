import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { DealsComponent } from './deals/deals.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WhatnewComponent } from './whatnew/whatnew.component';

const routes: Routes = [
  {path:'', redirectTo: 'home' ,pathMatch:'full'  },
  {path:'categories', component:CategoriesComponent},
  {path:'deals',component:DealsComponent},
  {path:'whatnew',component:WhatnewComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'account',component:AccountComponent},
  {path:'cart',component:CartComponent},
  {path:'home',component:HomeComponent},
  {path:'shop',component:HomeComponent},
  {path:'foot',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
