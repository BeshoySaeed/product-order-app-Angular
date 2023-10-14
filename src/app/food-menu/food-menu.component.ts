import { Component } from '@angular/core';
import { FoodItemsServiceService } from '../services/ApiService/food-items-service.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css'],
})
export class FoodMenuComponent {
  foodList: any;
  constructor(private apiServ: FoodItemsServiceService) {}

  ngOnInit() {
    this.foodList = this.apiServ.meals;
  }
}
