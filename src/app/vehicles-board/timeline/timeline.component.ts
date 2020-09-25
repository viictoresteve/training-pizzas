import { Timeline } from 'vis-timeline';
import { DataSet, DataStream } from 'vis-data';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Vehicle } from '../models/vehicle';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() vehicleItems: Observable<Array<Vehicle>>;

  vehicles: Vehicle[];



  constructor() {
  }

  ngOnInit(): void {

    console.log('vehicle items', this.vehicleItems);
    this.vehicleItems.subscribe(vehicles => {
      if (vehicles.length !== 0) { this.generateTL(vehicles); }
    });
  }

  generateTL(vehicles: Vehicle[]): void {
    const now = moment().minutes(0).seconds(0).milliseconds(0);
    var groups = [
      // tslint:disable-next-line: quotemark
      { id: 0, content: "First", value: 1 },
      { id: 1, content: "Third", value: 3 },
      { id: 3, content: "Second", value: 2 },
      { id: 4, content: "Forth", value: 4 },
      { id: 5, content: "Fifth", value: 5 },
      { id: 6, content: "Sixth", value: 6},
      { id: 7, content: "Seventh", value: 7 },
      { id: 8, content: "Eighth", value: 8},
    ];

    const items = new DataSet([]);
    vehicles.forEach(vehicle => {
      console.log(vehicle.id);
      items.add(
        vehicle
      );
      console.log('dates', vehicle.start);
    });

    
    // const items = [
    //   { content: "item 1", start: "2014-04-20", group: 1 },
    //   { content: "item 2", start: "2014-04-14", group: 1 },
    //   { content: "item 3", start: "2014-04-18", group: 1 },
    //   { content: "item 4", start: "2014-04-16", end: "2014-04-19", group: 1 },
    //   { content: "item 5", start: "2014-04-25", group: 1 },
    //   { content: "item 6", start: "2014-04-27", type: "point", group: 1 },
    //   { content: "Marriage", start: "2014-01-1", group: 1, className: "vis-item", end: "2014-05-20", style: "color: red; background-color: pink;" }
    // ];
    console.log('it', items);

    var options = {
      width: '100%',
    };

    const container = document.getElementById('visualization');
    if (container && items.length !== 0) {
      const timeline = new Timeline(container, vehicles, groups, options);

    }
  }
}
