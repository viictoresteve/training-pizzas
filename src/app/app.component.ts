import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Vehicle } from './vehicles-board/models/vehicle';
import { Observable } from 'rxjs';
import { AddItemAction, GetItemsAction } from './vehicles-board/vehicles.actions';
import { v4 as uuid } from 'uuid';
import { AppState } from './vehicles-board/models/app-state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-pizzas';

  vehicleItems$: Observable<Array<Vehicle>>;
  error$: Observable<Error>;
  vehicleItem: Vehicle = {
    name: 'Lamborghini Huracan'
  }

  constructor(private store: Store<AppState>) {

  }


  ngOnInit() {
    this.vehicleItems$ = this.store.select(store => {
      return store.vehicle.list;
    }
    );
    this.error$ = this.store.select(store => store.vehicle.error);
    this.store.dispatch(new GetItemsAction());
  }

  addItem() {
    this.vehicleItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.vehicleItem));
    this.vehicleItem = { name: '' };
  }
}
