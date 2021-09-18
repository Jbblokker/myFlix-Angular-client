import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject,OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss']
})
export class GenreCardComponent implements OnInit {

  constructor(
   @Inject(MAT_DIALOG_DATA)
    public data: {
      Title: string;
      Description: string;
    }
  ) { }

  ngOnInit(): void {
  }

}