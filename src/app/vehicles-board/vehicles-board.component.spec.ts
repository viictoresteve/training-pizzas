import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesBoardComponent } from './vehicles-board.component';

describe('VehiclesBoardComponent', () => {
  let component: VehiclesBoardComponent;
  let fixture: ComponentFixture<VehiclesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
