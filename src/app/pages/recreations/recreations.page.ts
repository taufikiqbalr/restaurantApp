import { RecreationService } from './../../services/recreation.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'recreations',
  templateUrl: './recreations.page.html',
  styleUrls: ['./recreations.page.scss'],
})
export class RecreationsPage implements OnInit {

  results: Observable<any>;

  constructor(private recreationService: RecreationService) {
    this.results = this.recreationService.getAll();
  }

  ngOnInit() {
  }

}
