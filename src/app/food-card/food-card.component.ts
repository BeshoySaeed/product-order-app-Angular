import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FoodItemsServiceService } from '../services/ApiService/food-items-service.service';
import { ItemInterface } from '../interfaces/item-interface';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css'],
})
export class FoodCardComponent {
  @Input() foodItem: any;
  star = faStar;
  empty = true;

  constructor(private route: Router,private foodService : FoodItemsServiceService) {}

  iterateFunction(n: number) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }

  addFav(item: any) {
    if(this.empty){
      this.foodService.favMeal.push(item);
    }else{
      this.foodService.favMeal = this.foodService.favMeal.filter((element: any) => element.id != item.id)
    }
    this.empty = !this.empty;
  }
  // onNavigate(item : ItemInterface){
  //   this.route.navigate(['cart', item.id]);
  // }

}
