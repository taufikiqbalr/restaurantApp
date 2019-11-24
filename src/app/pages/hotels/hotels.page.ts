import { HotelService } from './../../services/hotel.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {

  results: Observable<any>;

  constructor(private hotelService: HotelService) {
    this.results = this.hotelService.getAll();
  }

  ngOnInit() {
  }

}
