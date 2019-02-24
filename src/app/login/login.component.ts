import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
declare let alertify: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.model).subscribe(next => {
      alertify.success('Welcome ' + this.getName());
    }, error => {
      alertify.error('Can\'t Login');
    });
  }
  logout() {
    alertify.warning('Good Bye :\') ' + this.getName());
    this.loginService.LogOut();
  }
  getName(): string {
    return this.loginService.getName();
  }
  isLogged() {
    return this.loginService.isTokenExpired();
  }
}
