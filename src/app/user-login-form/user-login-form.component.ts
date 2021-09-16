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
  @Input() userData = { Username: '', Password: '', }; 

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router,
  ) { }

  ngOnInit(): void { }

  loginUser(): void {
    // @ts-expect-error
    this.fetchApiData.userLogin(this.userData).subscribe((response) => {
      localStorage.setItem('username', this.userData.Username);
      localStorage.setItem('token', response.token);
      this.snackBar.open(this.userData.Username, 'Welcome back!', {
        duration: 3000
      });
      this.router.navigate(['movies']);
      // @ts-expect-error
    }, (response) => {
        this.snackBar.open(response, 'OK', {
        duration: 3000
      });
    })
  }
}
