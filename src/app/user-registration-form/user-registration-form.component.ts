//core modules 
import { Component, OnInit, Input } from '@angular/core';


import { FetchApiDataService } from '../fetch-api-data.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  /**
   * Required form fields for the user registration
  */
  @Input() userData = { 
    Username: '',
    Password: '', 
    Email: '', 
    Birthday: '' 
  };

  constructor(
      public fetchApiData: FetchApiDataService,
      public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
      public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  /**
   * Register a new user and save user information and login credentials to the database
  */
  registerUser(): void {
      this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
    // Logic for a successful user registration goes here! (To be implemented)
      this.dialogRef.close(); // This will close the modal on success!
      this.snackBar.open(result, 'OK', {
          duration: 2000
      });
      }, (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 2000
        });
      });
    }
}