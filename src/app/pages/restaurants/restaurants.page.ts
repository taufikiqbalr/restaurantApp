import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  results: Observable<any>;

  constructor(private restaurantService: RestaurantService) {
    this.results = this.restaurantService.getAll();
  }

  ngOnInit() {
  }

}
