//core modules
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FetchApiDataService } from '../fetch-api-data.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: './profile',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  
  user: any = {};

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router,
  ) { }

  /**
   * When opening the component, gets the user
  */
  ngOnInit(): void {
    this.getUser();
  }

  /**
   * gets user details 
  */
  getUser(): void {
    let user = localStorage.getItem('username');
    this.fetchApiData.getUser(user).subscribe((res: any) => {
      this.user = res;
    });
  }

  openUserUpdateDialog(): void {
    this.dialog.open(EditProfileComponent, {
      width: '400px'
    });
  }

   /**
   * deletes the user's profile 
  */
  deleteProfile(): void {
    if(confirm('Are you sure? This cannot be undone.')) {
    this.fetchApiData.deleteUser().subscribe(() => {
      localStorage.clear();
      this.router.navigate(['welcome']);
      this.snackBar.open('Account Deleted', 'OK', {
        duration: 3000
        });
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/profile']).then(() => {
      window.location.reload();
    });
  }

}