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
  chefs: any;
  vehicles: any;
  vehicleItems$: Observable<Array<Vehicle>>;
  mechanics$: Observable<Mechanic[]>;
  mechanicItems$: Observable<Array<Mechanic>>;
  error$: Observable<Error>;

  ngOnInit() {
    this.vehicleItems$ = this.store.select(store => store.vehicle.list);
    
    this.store.dispatch(new GetItemsAction());
    this.mechanicItems$ = this.store.select(store => store.mechanic.list);
    this.store.dispatch(new GetMechanicsAction());
    this.error$ = this.store.select(store => store.vehicle.error);
    console.log('board', this.vehicleItems$, this.mechanicItems$);
  }
  constructor(private store: Store<AppState>) { }


}
