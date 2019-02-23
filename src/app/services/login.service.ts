import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:5000/Auth/';

  jwtDecodedToken: any;
  jwtHelper: JwtHelperService;
  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      this.jwtDecodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'Login', model).
      pipe(
        map(
          (user: any) => {
            if (user) {
              localStorage.setItem('token', user.token);
              this.jwtDecodedToken = this.jwtHelper.decodeToken(user.token);

            }
          }
        )
      );
  }
  LogOut(): any {
    localStorage.removeItem('token');
  }

  getName(): string {
    if (this.jwtDecodedToken) {
      return this.jwtDecodedToken.unique_name;
    }
    return null;
  }


  isTokenExpired(): boolean {
    const token = localStorage.getItem('token');

    return token && !this.jwtHelper.isTokenExpired(token);


  }
}
