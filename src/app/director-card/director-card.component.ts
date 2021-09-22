// core modules
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-card',
  templateUrl: './director-card.component.html',
  styleUrls: ['./director-card.component.scss']
})
export class DirectorCardComponent implements OnInit {

  constructor(

    /**
     * Uses Inject to get director details 
    */
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string,
      Bio: string,
    }
  ) { }

  ngOnInit(): void {
  }

}