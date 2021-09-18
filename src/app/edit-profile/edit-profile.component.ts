import { Component, OnInit, Input } from '@angular/core';

// components
import { FetchApiDataService } from '../fetch-api-data.service';

// Material modules
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  /**
   * Required fields for the update user form
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
   * update user details
   */
  editProfile(): void {
    this.fetchApiData.editUser(this.userData).subscribe((res) => {
      // Logic for successful user registration needs to be implemented here!
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