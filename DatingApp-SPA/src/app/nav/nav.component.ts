import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authServise: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authServise.login(this.model).subscribe(next => {
        console.log('Logged in successfull');
    }, error => {
        console.log('Failed to login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
