import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  id: string;
  isLogged: string;
  loggedStatus: boolean;
  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('token');
    //this.isLogged = localStorage.getItem('isLoggedInStatus');
    //this.loggedStatus = this.authService.;
  }
  logout(): void {
    console.log("Logout"); 
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean{
    let status = false;
    if( localStorage.getItem('isLoggedInStatus') == "true"){
      status = true;
    }
    else{
      status = false;
    }
    return status;
    //this.authService.isLoggedIn;
}
}
