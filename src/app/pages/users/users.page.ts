import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  results: Observable<any>;

  constructor(private userService: UserService) { 
    this.results = this.userService.getAll();
  }

  ngOnInit() {
  }

  searchChanged() {

  }

}
