//Core Modules 
import { Component, OnInit, Input } from '@angular/core';

import { FetchApiDataService } from '../fetch-api-data.service';

import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  /**
     * Fields required to update user's account.
  */
  @Input() userData = { 
    username: '', 
    password: '', 
    email: '', 
    birthday: '',
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<EditProfileComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  /**
     * Update user information.
  */
  editProfile(): void {
    this.fetchApiData.editUser(this.userData).subscribe((res) => {
      this.dialogRef.close();
      localStorage.setItem('username', res.username)
      console.log(res)
      this.snackBar.open(this.userData.username, 'Successfully updated user details!', {
        duration: 3000
      });
    }, (res) => {
      this.snackBar.open(res, 'OK', {
        duration: 3000
      });
      setTimeout(function () {
        window.location.reload();
       }, 3500);
      })}
}