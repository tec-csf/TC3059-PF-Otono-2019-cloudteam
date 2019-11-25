import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DUMMY_DATA } from './dummy-data';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
  scoresData: any[] = DUMMY_DATA;
  groups: any[];
  groupControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.groupControl.valueChanges.subscribe(value => {
      if (value) {

      }
    });
  }

}
