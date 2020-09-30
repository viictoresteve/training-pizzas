import { Mechanic } from './../models/mechanic';
import { Timeline, DataGroup, DataGroupCollectionType } from 'vis-timeline';
import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Observable, forkJoin, combineLatest } from 'rxjs';
import { AppState } from '../models/app-state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent {

  constructor(private store: Store<AppState>) {

    const vehicles = this.store.select(store => store.vehicle.list);
    const mechanics = this.store.select(store => store.mechanic.list);

    const data = combineLatest([
      vehicles,
      mechanics
    ])
      .pipe(
        map(([vehArray, mechArray]) => {
          // combineLatest returns an array of values, here we map those values to an object
          return { vehArray, mechArray };
        })
      );
    data.subscribe(r => {
      this.generateTL(r.vehArray, r.mechArray);
    });
  }

  generateTL(vehicles: Vehicle[], mechanics: Mechanic[]): void {
    const container = document.getElementById('visualization');

    const options = {
      groupOrder: 'content',
      orientation: 'top',
    };

    if (container && vehicles.length !== 0 && mechanics.length !== 0) {
      const timeline = new Timeline(container, vehicles, mechanics as DataGroupCollectionType, options);
    }
  }

}
