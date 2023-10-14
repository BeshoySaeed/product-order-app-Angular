import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemInterface } from '../interfaces/item-interface';
import { FoodItemsServiceService } from '../services/ApiService/food-items-service.service';

@Component({
  selector: 'app-item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.css']
})
export class ItemDataComponent {
  itemId !: number ;
  item !: any; 

  constructor(private activatedItem: ActivatedRoute, private apiService : FoodItemsServiceService){}

  ngOnInit(){
    this.activatedItem.paramMap.subscribe((item) => {
      this.itemId = Number(item.get('id'));
    })
    this.item = this.apiService.meals.filter(item => item.id == this.itemId)
    console.log(this.item[0]);
  }



}
