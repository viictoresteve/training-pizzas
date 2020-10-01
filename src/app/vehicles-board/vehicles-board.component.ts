import { GetMechanicsAction } from './mechanics.actions';
import { Mechanic } from './models/mechanic';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './models/vehicle';
import { Store } from '@ngrx/store';
import { AppState } from './models/app-state';
import { GetItemsAction } from './vehicles.actions';

@Component({
  selector: 'app-vehicles-board',
  templateUrl: './vehicles-board.component.html',
  styleUrls: ['./vehicles-board.component.scss']
})
export class VehiclesBoardComponent implements OnInit {
  vehicleItems$: Observable<Vehicle[]>;
  mechanicItems$: Observable<Array<Mechanic>>;
  mechanicError$: Observable<Error>;
  vehicleError$: Observable<Error>;

  ngOnInit(): void {
    this.vehicleItems$ = this.store.select(store => store.vehicle.list);
    this.store.dispatch(new GetItemsAction());
    this.mechanicItems$ = this.store.select(store => store.mechanic.list);
    this.store.dispatch(new GetMechanicsAction());
    this.vehicleError$ = this.store.select(store => store.vehicle.error);
    this.mechanicError$ = this.store.select(store => store.mechanic.error);
  }
  constructor(private store: Store<AppState>) { }
}
