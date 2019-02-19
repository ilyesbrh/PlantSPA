import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:5000/Auth/Login';
  constructor(private http: HttpClient) { }
  login(model: any) {
    return this.http.post(this.baseUrl, model).
      pipe(
        map(
          (user: any) => {
            if (user) {
              localStorage.setItem('token', user.token);
            }
          }
        )
      );
  }
}
