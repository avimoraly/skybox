import { Component, Input, OnInit } from '@angular/core';
import { Zone } from '../services/interfaces';

@Component({
  selector: 'app-cell-zone',
  templateUrl: './cell-zone.component.html',
  styleUrls: ['./cell-zone.component.scss']
})
export class CellZoneComponent implements OnInit {
  @Input() zone: Zone;
  constructor() { }

  ngOnInit(): void {
  }

}
