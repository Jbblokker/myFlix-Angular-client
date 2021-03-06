//Angular Material Components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//Material design modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular visual Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Components
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component.spec';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { SynopsisCardComponent } from './synopsis-card/synopsis-card.component';
import { DirectorCardComponent } from './director-card/director-card.component';
import { GenreCardComponent } from './genre-card/genre-card.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NavBarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './favorites/favorites.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'users', component: ProfileViewComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
  { path: 'profile', component: ProfileViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
    UserLoginFormComponent,
    SynopsisCardComponent,
    DirectorCardComponent,
    GenreCardComponent,
    ProfileViewComponent,
    EditProfileComponent,
    NavBarComponent,
    FavoritesComponent,
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
