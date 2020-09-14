import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { CellZoneComponent } from './cell-zone/cell-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    CellZoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
