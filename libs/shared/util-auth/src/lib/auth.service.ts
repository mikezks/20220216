import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserName = '';
  // message = new BehaviorSubject<string>(null);


  login(userName: string, password: string): void {
    this.currentUserName = userName;
  }

  logout(): void {
    this.currentUserName = '';
  }

}
