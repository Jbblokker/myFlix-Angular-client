//core modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

  userDetails: any;

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserDetails()
  }
  
  /**
   * Gets user details, used to display username in the nav bar
  */
  public getUserDetails(): void {
    this.userDetails = localStorage.getItem('username');
  }

  
  
    /**
     * navigates to "all movies"
     */
    openAllMovies(): void {
      this.router.navigate(['movies']);
    }
  
    /**
     * navigates to "favoritemovies"
     */
    openFavorites(): void {
      this.router.navigate(['favorites'])
    }
  
    /**
     * logs out the user by clearing the localstorage (username, token) and reloads the page
     * then -> redirect to welcome page
     */

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
    this.snackBar.open('Logout successful!', 'OK', {
      duration: 3000
    });
  }
}