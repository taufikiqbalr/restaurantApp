import { PlannerService } from './../../services/planner.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'planner',
  templateUrl: './planner.page.html',
  styleUrls: ['./planner.page.scss'],
})
export class PlannerPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';

  constructor(private plannerService: PlannerService) {
    this.results = this.plannerService.getAll();
  }

  ngOnInit() {
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.plannerService.searchData(this.searchTerm);
  }

}
