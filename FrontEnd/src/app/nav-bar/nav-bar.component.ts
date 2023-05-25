import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/shared/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedInUser: any;
  constructor(private alertifyService: AlertifyService) {}

  ngOnInit() {}

  loggedIn() {
    this.loggedInUser = localStorage.getItem('token');
    return this.loggedInUser;
  }

  logOut() {
    localStorage.removeItem('token');
    this.alertifyService.warning('You are Logged Out...');
  }
}
