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


  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
   
  }
}
