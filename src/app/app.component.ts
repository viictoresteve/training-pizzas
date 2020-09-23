import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-pizzas';

  ngOnInit() {

    const vehicles = localStorage.getItem('vehicles');

    if (vehicles) {
      // this.store.dispatch()
    }
  }
  constructor(private store: Store<AppState>) {

  }
}
