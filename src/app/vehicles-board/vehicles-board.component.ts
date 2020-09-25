import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './models/vehicle';
import { Store } from '@ngrx/store';
import { AppState } from './models/app-state';
import { GetItemsAction, AddItemAction } from './vehicles.actions';

@Component({
  selector: 'app-vehicles-board',
  templateUrl: './vehicles-board.component.html',
  styleUrls: ['./vehicles-board.component.scss']
})
export class VehiclesBoardComponent implements OnInit {
  chefs: any;
  vehicles: any;
  vehicles$: Observable<Vehicle[]>;
  vehicleItems$: Observable<Array<Vehicle>>;
  error$: Observable<Error>;

  ngOnInit() {
    this.vehicleItems$ = this.store.select(store => store.vehicle.list);
    this.error$ = this.store.select(store => store.vehicle.error);
    this.store.dispatch(new GetItemsAction());
  }
  constructor(private store: Store<AppState>) { }


}
