import { Mechanic } from './../models/mechanic';
import { Timeline, DataGroup, DataGroupCollectionType } from 'vis-timeline';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnChanges {
  @Input() vehicleItems: Observable<Array<Vehicle>>;
  @Input() mechanicItems: Observable<Array<Mechanic>>;

  vehicles: Vehicle[];
  mechanics: Mechanic[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    // doing one at a time because OBSERVABLES can resolve one at a time

    if (changes.vehicleItems && changes.vehicleItems.currentValue.length > 0) {
      this.vehicles = changes.vehicleItems.currentValue;
    }
    if (changes.mechanicItems && changes.mechanicItems.currentValue.length > 0) {
      this.mechanics = changes.mechanicItems.currentValue;
    }
    if (this.vehicles && this.mechanics) {
      this.generateTL(this.vehicles, this.mechanics);
    }
  }

  generateTL(vehicles: Vehicle[], mechanics: Mechanic[]): void {
    const container = document.getElementById('visualization');

    // TIMELINE not getting items if in DATASET FORMAT (pending)
    // let items = new DataSet([]);
    // vehicles.forEach(vehicle => {
    //   items.add(
    //     vehicle
    //   );
    // });

    const options = {
      groupOrder: 'content',
      orientation: 'top',
    };

    if (container && vehicles.length !== 0 && mechanics.length !== 0) {

      const timeline = new Timeline(container, vehicles, mechanics as DataGroupCollectionType, options);

    }
  }

}
