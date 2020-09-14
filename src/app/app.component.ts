import { TableService } from './services/table.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataMatrix: [][];
  hoverRow: number = null;
  hoverCol: number = null;
  constructor(private tableService: TableService) {
    this.dataMatrix = tableService.matrixdData;
  }
  ngOnInit(): void {
    console.log()
  }
  isRelatedHover(currRow: number, currCol: number): boolean {
    if ((currRow < this.hoverRow && currCol === this.hoverCol && this.hoverCol !== 0) ||
         currCol < this.hoverCol && currRow === this.hoverRow && this.hoverRow !== 0) {
          return true;
    }
    return false;
  }
}
