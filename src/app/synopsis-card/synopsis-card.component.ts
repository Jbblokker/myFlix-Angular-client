//core modules
import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-synopsis-card',
  templateUrl: './synopsis-card.component.html',
  styleUrls: ['./synopsis-card.component.scss']
})
export class SynopsisCardComponent implements OnInit {

  constructor(

    /**
     * uses Inject to get movie details from the movie object
    */
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Title:string,
      imageUrl:any,
      Description:string,
    }

  ) { }

  ngOnInit(): void {
  }

}