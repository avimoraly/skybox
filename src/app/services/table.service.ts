import { Zone, Section } from './interfaces';
import { Injectable } from '@angular/core';
import data from './zones.json';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  tableData = data;
  matrixdData = [];
  mapper = {};
  constructor() {
    console.log('---------', this.tableData);
    this.matrixdData[0] = [];
    this.tableData.zones.forEach((zone: Zone, i: number) => {
      this.matrixdData[i + 1] = [];
      this.tableData.zones.forEach((_: Zone, j: number) => {
        this.matrixdData[i][j + 1] = null;
      });
      this.matrixdData[0][i + 1] = zone;
      // this.matrixdData[i + 1] = [];
      this.matrixdData[i + 1][0] = zone;
      this.mapper[zone.guid] = i + 1;
    });
    this.tableData.sections.forEach((section: Section) => {
      const source = this.mapper[section.sourceGuid];
      const dest = this.mapper[section.destinationGuid];
      this.matrixdData[source][dest] = section;
    });
    console.log(' this.matrixdData',  this.matrixdData)

// destinationGuid: "P5"
// sourceGuid: "P3"

    // export interface Section {
    //   complianceLevel: number;
    //   destinationGuid: string;
    //   hasErrors: boolean;
    //   hasMultipleSections: boolean;
    //   hasUncomputedResults: boolean;
    //   sectionId: number;
    //   sourceGuid: string;
    //   violationsCount: number;
    // }

//     complianceLevel: 100
// destinationGuid: "P5"
// sourceGuid: "P3"
// hasErrors: false
// hasMultipleSections: false
// hasUncomputedResults: false
// sectionId: 3037
// violationsCount: 0



    console.log('---------', this.matrixdData);


  }
}
