import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasBoardComponent } from './pizzas-board.component';

describe('PizzasBoardComponent', () => {
  let component: PizzasBoardComponent;
  let fixture: ComponentFixture<PizzasBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzasBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
