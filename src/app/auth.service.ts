import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor( private router: Router) { }

  logout(): void {
   
    this.loggedIn.next(false);
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedInStatus');
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  } 

  login(user: User){
    if (user.userid !== '' && user.password !== '' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }
}
