import { TestBed } from '@angular/core/testing';

import { FoodItemsServiceService } from './food-items-service.service';

describe('FoodItemsServiceService', () => {
  let service: FoodItemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodItemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
