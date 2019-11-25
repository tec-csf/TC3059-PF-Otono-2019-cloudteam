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
  groups: any[] = [
    {_id:  '1', name: 'Aulas 1'},
    {_id:  '2', name: 'Aulas 2'},
    {_id:  '3', name: 'Aulas 3'},
    {_id:  '4', name: 'Aulas 4'},
    {_id:  '5', name: 'EGADE'},
  ];
  groupControl: FormControl = new FormControl('5');

  constructor() { }

  ngOnInit() {
    this.groupControl.valueChanges.subscribe(value => {
      if (value) {

      }
    });
  }

}
