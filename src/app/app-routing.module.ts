import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FavItemsComponent } from './fav-items/fav-items.component';
import { ItemDataComponent } from './item-data/item-data.component';

const routes: Routes = [
  {
    path: 'favourite',
    component: FavItemsComponent
  },
  {
    path: '',
    component: FoodMenuComponent
  },  
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'cart/:id',
    component: ItemDataComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
