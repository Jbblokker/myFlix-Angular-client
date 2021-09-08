import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api ul that will provide data for the client app
const apiUrl = 'https://sleepy-crag-80436.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  //Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the Entire Class, making it available via this.http
  constructor(private http: HttpClient) {
  }
  //Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any>
  {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe
  (
    catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'Something bad happened: please try again later.');
  } 
}

//User registration
export class UserRegistration {
  constructor(private http:HttpClient) { }

  userRegistration(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/user', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
      ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'Something bad happened: please try again later.');
  } 
}

//user login
export class userRegistration {
  constructor(private http:HttpClient) { }

  userRegistration(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/user/:Username', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
      ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'Huh, looks like you are new here, try to register instead: please try again later.');
  } 
}

//get all movies 
export class getAllMovies {
  constructor(private http:HttpClient) { }

  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/movies', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
      ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'I am pretty sure you did something wrong: please try again later.');
  } 
}

//get one movie
export class getSingleMovie {
  constructor(private http:HttpClient) { }

  getSingleMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/movies/:Title', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
      ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'We cannot seem to find that movie : please try again later.');
  } 
}

//get director
export class getDirector {
  constructor(private http:HttpClient) { }

  getDirector(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/movies/Director/:Name', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
      ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'Looks like you should check your spelling we could not find anything: please try again later.');
  } 
}

//Get a genre by name(private service)
export class GetGenreByNameService {
  constructor(private http:HttpClient) { }

  getGenre(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/movies/Genres/:Title', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
      ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'Are you sure you spelled the genre right?: please try again later.');
  } 
}

//get favorite movies for a user
export class favoriteMovies {
  constructor(private http:HttpClient) { }

  favoriteMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/user/:username/movies/movieID', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
      ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'We could not get your movies: please try again later.');
  } 
}

//add movies to favorite
export class addFavorite {
  constructor(private http:HttpClient) { }

  addFavorite(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/user/:Username/movies/movieID', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
      ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'It seems that your movie was not added: please try again later.');
  } 
}

//edit user
export class userUpdate {
  constructor(private http:HttpClient) { }

  userUpdate(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/user/:Username', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
      ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'We could not update your information: please try again later.');
  } 
}

//delete user
export class removeUser {
  constructor(private http:HttpClient) { }

  removeUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/user/:Username', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
      ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'Unfortunately, you are still here: please try again later.');
  } 
}

//delete movie from favorite list
export class removeFavorite {
  constructor(private http:HttpClient) { }

  removeFavorite(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + '/user/:Username/movies/movieID', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
      ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any { 
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}` );
  }
  return throwError(
    'Something bad happened: please try again later.');
  } 
}


