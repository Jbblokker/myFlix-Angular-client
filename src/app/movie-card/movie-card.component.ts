//core modules
import { Component } from '@angular/core';


import { FetchApiDataService } from '../fetch-api-data.service'
import { SynopsisCardComponent } from '../synopsis-card/synopsis-card.component';
import { DirectorCardComponent } from '../director-card/director-card.component';
import { GenreCardComponent } from '../genre-card/genre-card.component';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  favorites: any = [];
  user: any = {};
  faves: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,) { }

  /**
   * gets movies and favorite movies when initialized
  */  
  ngOnInit(): void {
    this.getMovies();
    this.getUserFavs();
  }

  /**
   * gets the users favorite movies
  */
  getUserFavs(): void {
    const user = localStorage.getItem('username');
    this.fetchApiData.getUser(user).subscribe((resp: any) => {
    this.faves = resp.Favorites;
    console.log(this.faves);
    return this.faves;
    });
  } 

  /**
   *gets all movies
  */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * opens synopsis modal with infos about movie
   * @param Title (movie title)
   * @param imageUrl (movie image/cover)
   * @param Description (movie description)
  */
  openSynopsis(Title:string, imageUrl:any, Description:string ): void {
    this.dialog.open(SynopsisCardComponent, {
      data: { Title, imageUrl, Description },
      width: '500px'
    });
  }

  /**
   * opens director modal with infos about director
   * @param Name (director name)
   * @param Bio (director bio)
  */
  openDirector(Name:string, Bio:string ): void {
    this.dialog.open(DirectorCardComponent, {
      data: { Name, Bio },
      width: '500px'
    });
  }

  /**
   * opens genre modal with infos about genre
   * @param Name (genre Name)
   * @param Description (genre Description)
  */
  openGenre(Title:string, Description:string): void {
    this.dialog.open(GenreCardComponent, {
      data: { Title, Description },
      width: '500px'
    });
  }

  /**
   * opens genre modal with infos about genre
   * @param Name (genre Name)
   * @param Description (genre Description)
  */
  addToUserFavorites(id:string, title:string): void {
    this.fetchApiData.addToFavorites(id).subscribe((resp: any) => {
      this.snackBar.open(`${title} has been added to your favorites.`, 'OK', {
        duration: 3000,
      })
      setTimeout(function() {
        window.location.reload()}, 3000);
    });
    return this.getUserFavs();
  }

  /**
   * adds the movie to the users favorite movies array
   * @param id (movie._id - unique identifier)
   * @param Title (movie title)
  */
  addToFavoriteMoviesList(id: string, Title: string): void {
    this.fetchApiData.addToFavorites(id).subscribe((res: any) => {
      //let favMovies = res.Favorites;
      this.snackBar.open(`${Title} has been added to favorites`, 'OK', {
        duration: 3000,
      })
      return this.getUserFavs();
    })
  }

  /**
   * removes the movie from users favorite movies array
   * @param id (movie._id - unique identifier)
   * @param Title (movie Title)
   * @returns a status message - success/error
  */
  removeFromFavorites(id: string, Title: string): void {
   this.fetchApiData.removeFavoriteMovie(id).subscribe((res: any) => {
     //let favMovies = res.Favorites;
     this.snackBar.open(`${Title} has been removed from favorites`, 'OK', {
       duration: 3000,
     })
     setTimeout(function () {
      window.location.reload();
     }, 3500);
     return this.getUserFavs();
   })
  }

  /**
   * Compares movie id's with getUsersFavs returned list to display the favorite movie icon (heart) correctly
   * @param id 
  */
  setFavStatus(id: any): any {
    if (this.faves.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
}

