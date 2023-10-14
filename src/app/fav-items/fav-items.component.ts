import { Component } from '@angular/core';
import { FoodItemsServiceService } from '../services/ApiService/food-items-service.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { ItemInterface } from '../interfaces/item-interface';


@Component({
  selector: 'app-fav-items',
  templateUrl: './fav-items.component.html',
  styleUrls: ['./fav-items.component.css']
})
export class FavItemsComponent {
  trashicon = faTrash;
  favItemArr : any = [];

  constructor(private apiServices: FoodItemsServiceService){}


  ngOnInit(){
    this.favItemArr = this.apiServices.favMeal;
    for(let i of this.favItemArr){
      console.log(i.name)
    }
    console.log(this.favItemArr)
  }
  ngOnChange(){
    this.favItemArr = this.apiServices.favMeal
  }

  trashIt(item:ItemInterface){
    this.apiServices.favMeal = this.apiServices.favMeal.filter( (i : ItemInterface) => i.id != item.id );
    this.favItemArr = this.apiServices.favMeal
    console.log(this.apiServices.favMeal)
  }



}
