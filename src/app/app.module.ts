import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { TaskBarComponent } from './task-bar/task-bar.component';
import { CardComponent } from './card/card.component';
import { ProductComponent } from './product/product.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CategoriesComponent } from './categories/categories.component';
import { DealsComponent } from './deals/deals.component';
import { WhatnewComponent } from './whatnew/whatnew.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TaskBarComponent,
    CardComponent,
    ProductComponent,
    ButtonsComponent,
    CategoriesComponent,
    DealsComponent,
    WhatnewComponent,
    DeliveryComponent,
    AccountComponent,
    CartComponent,
    HomeComponent,
    ShopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
