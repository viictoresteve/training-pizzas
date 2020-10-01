import { Mechanic } from './../models/mechanic';
import { Timeline, DataGroup, DataGroupCollectionType } from 'vis-timeline';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { DataSet } from 'vis-data';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnChanges {
  @Input() vehicleItems: Array<Vehicle>;
  @Input() mechanicItems: Array<Mechanic>;

  ngOnChanges(): void {

    if (this.vehicleItems && this.mechanicItems) {
      this.generateTimeline(this.vehicleItems, this.mechanicItems);
    }
  }

  generateTimeline(vehicles: Vehicle[], mechanics: Mechanic[]): void {
    const container = document.getElementById('visualization');

    const options = {
      groupOrder: 'content',
      orientation: 'top'
    };

    if (container && vehicles.length !== 0 && mechanics.length !== 0) {

      const timeline = new Timeline(container, vehicles, mechanics as DataGroupCollectionType, options);

    }
  }

}
