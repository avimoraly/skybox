import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellZoneComponent } from './cell-zone.component';

describe('CellZoneComponent', () => {
  let component: CellZoneComponent;
  let fixture: ComponentFixture<CellZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
