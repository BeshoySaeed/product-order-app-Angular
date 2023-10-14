import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodItemsServiceService {
  meals = [
    {
      id: 1,
      name: 'burger',
      img: '../../../assets/images/apple.jpg',
      description: 'burger sandwich hot sus',
      stars: 3,
    },
    {
      id: 2,
      name: 'chicken',
      img: '../../../assets/images/chicken.jpg',
      description: 'be a vampire and try to eat it',
    },
    {
      id: 3,
      name: 'pastaaa',
      img: '../../../assets/images/download (1).jpeg',
      description: 'burger sandwich hot sus',
      stars: 4,
    },
    {
      id: 4,
      name: 'pasta chicken',
      img: '../../../assets/images/download.jpeg',
      description: 'burger sandwich hot sus',
      stars: 2,
    },
    {
      id: 5,
      name: 'burger',
      img: '../../../assets/images/fruits.webp',
      description: 'burger sandwich hot sus',
      stars: 3,
    },
    {
      id: 6,
      name: 'burger',
      img: '../../../assets/images/apple.jpg',
      description: 'burger sandwich hot sus',
      stars: 3,
    },
    {
      id: 7,
      name: 'burger',
      img: '../../../assets/images/apple.jpg',
      description: 'burger sandwich hot sus',
      stars: 3,
    },
    {
      id: 8,
      name: 'burger',
      img: '../../../assets/images/apple.jpg',
      description: 'burger sandwich hot sus',
      stars: 3,
    },
  ];

  favMeal :any = [];

  constructor() {}
}
