//core modules 
import { Component, OnInit } from '@angular/core';

import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreCardComponent } from '../genre-card/genre-card.component';
import { DirectorCardComponent } from '../director-card/director-card.component';
import { SynopsisCardComponent } from '../synopsis-card/synopsis-card.component';
  
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


const user = localStorage.getItem('username');

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
  
})

export class FavoritesComponent implements OnInit {
  user: any = {};
  favorites: any = [];
  movies: any[] = [];
  favs: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }
  
  /**
    * Will get movies and favorites when initialized. 
  */
  ngOnInit(): void {
    this.getMovies();
    this.getUsersFavs();
  }

  /**
   * gets all movies
  */
  getMovies(): void {
    // this.isLoading: true
    this.fetchApiData.getAllMovies().subscribe((resp:any) => {
      // this.isLoading: false
      this.movies = resp;
      console.log(this.movies);
      return this.filterFavorites();
    })
  }

  /**
    * Filters movies to display only the users favorites
  */
  getUsersFavs(): void {
    const user = localStorage.getItem('Username');
    this.fetchApiData.getUser(user).subscribe((resp:any) => {
      this.favs = resp.Favorites;
      console.log(this.favs, 'favs');
      return this.favs;
    })
  }

  /**
   * movies are filtered if part of favorite movies array
   * @returns array of movies to be displayed in this component
  */
  filterFavorites(): void {
    this.movies.forEach((movie:any) => {
      if (this.favs.includes(movie._id)) {
        this.favorites.push(movie);
      } console.log(this.favorites, 'favorites');
    });
    return this.favorites;
  }

  /**
   * adds the movie to the users favorite movies array
   * @param id (movie._id - unique identifier)
   * @param Title (movie title)
   * @returns a status message - success/error
  */

  addToUserFavorites(id:string, Title:string): void {
    this.fetchApiData.addToFavorites(id).subscribe((resp: any) => {
      this.snackBar.open(`${Title} has been added to your favorites.`, 'OK', {
        duration: 3000,
      });
      return this.getUsersFavs();
    })
  }

  /**
   * removes the movie from users favorite movies array
   * @param id (movie._id - unique identifier)
   * @param Title (movie title)
   * @returns a status message - success/error
  */
  removeFromUserFavorites(id:string, Title:string): void {
    this.fetchApiData.removeFavoriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open(`${Title} has been removed from your favorites.`, 'OK', {
        duration: 3000,
      })
      setTimeout(function() {
        window.location.reload()}, 3000);
    });
    return this.getUsersFavs();
  }
  /** 
    * opens genre modal with infos about genre
    * @param Name (genre Name)
    * @param Description (genre Description)
  */
  openGenre(Name:string, Description:string): void {
    this.dialog.open(GenreCardComponent, {
      data: {Name, Description},
      width: '500px'
    });
  }

  /**
   * opens director modal with infos about director
   * @param Name (director name)
   * @param Bio (director bio)
  */
  openDirector(Name:string, Bio:string): void {
    this.dialog.open(DirectorCardComponent, {
      data: {Name, Bio},
      width: '500px'
    });
  }

  /**
   * opens synopsis modal with infos about movie
   * @param Title (movie Title)
   * @param imageUrl (movie image)
   * @param Description (movie Description)
  */
  openSynopsis(Title:string, imageUrl:any, Description:string): void {
    this.dialog.open(SynopsisCardComponent, {
      data: {Title, imageUrl, Description},
      width: '500px'
    });
  }

  /**
   * Compares movie id's with getUsersFavs returned list to display the favorite movie icon (heart) correctly
   * @param id 
  */
   setFavStatus(id: any): any {
    if (this.favs.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

}