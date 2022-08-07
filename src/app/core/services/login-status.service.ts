import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  constructor(private http:  HttpClient) {    
  }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    console.log(user,"user test")
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public isLoggedIn(): Observable<boolean> {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return of(true);
    }
    return of(false);
  }

  public logIn(payload: any){
    return this.http.post(`${environment.apiUrl}/auth`,payload);
  }

}
