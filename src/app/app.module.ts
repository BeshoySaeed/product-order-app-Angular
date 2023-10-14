import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './footer/footer.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FavItemsComponent } from './fav-items/fav-items.component';
import { ItemDataComponent } from './item-data/item-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FoodCardComponent,
    FoodMenuComponent,
    FavItemsComponent,
    ItemDataComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
