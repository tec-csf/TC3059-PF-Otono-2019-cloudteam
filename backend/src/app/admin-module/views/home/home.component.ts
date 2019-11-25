import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { FormControl } from '@angular/forms';

import { DUMMY_DATA } from './dummy-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  curve = shape.curveLinear;

  complainsData: any[] = DUMMY_DATA;
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
