import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-user-login-form', 
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
    
  /**
   * Form inputs required for login
  */
  @Input() userData = { 
    Username: '', 
    Password: '',
  } 

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router,
  ) { }

  ngOnInit(): void { }
  /**
   * Uses form details to login
  */
  userLogin(): void {
        this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      // Logic for successful user login
      this.dialogRef.close();
      console.log(this.userData)

      localStorage.setItem('username', this.userData.Username);
      localStorage.setItem('token', result.token);

      
      this.snackBar.open(this.userData.Username, 'Welcome back!', {
        duration: 3000
      });
      this.router.navigate(['movies']);
    }, (result) => {
        this.snackBar.open(result, 'OK', {
        duration: 3000
      });
    })
  }
}