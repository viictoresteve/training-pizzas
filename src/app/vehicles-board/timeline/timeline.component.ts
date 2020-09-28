import { map } from 'rxjs/operators';
import { Mechanic } from './../models/mechanic';
import { Timeline } from 'vis-timeline';
import { DataSet, DataStream } from 'vis-data';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { Vehicle } from '../models/vehicle';
import { Observable, forkJoin } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnChanges {
  @Input() vehicleItems: Observable<Array<Vehicle>>;
  @Input() mechanicItems: Observable<Array<Mechanic>>;

  vehicles: Vehicle[];
  mechanics: Mechanic[];



  constructor() {
  }

  ngOnInit(): void {
    console.log(this.vehicleItems, this.mechanicItems);

    // test forkjoin

    // forkJoin([this.vehicleItems, this.mechanicItems]).subscribe(res => {
    //   console.log('result', res);
    // });

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.vehicleItems && changes.vehicleItems.currentValue.length > 0) {
      this.vehicles = changes.vehicleItems.currentValue;
      console.log('in1', this.vehicles);
    }
    if (changes.mechanicItems && changes.mechanicItems.currentValue.length > 0) {

      this.mechanics = changes.mechanicItems.currentValue;
      console.log('in2', this.mechanics);
    }
    if (this.vehicles && this.mechanics) {
      console.log('lool si que son', this.vehicles, this.mechanics);
      this.generateTL(this.vehicles, this.mechanics);
    }
  }

  generateTL(vehicles: Vehicle[], mechanics: Mechanic[]): void {
    console.log('xd', vehicles, mechanics);

    const groups = new DataSet([]);
    mechanics.forEach(mechanic => {
      groups.add(
        mechanic
      );
    });

    const items = new DataSet([]);
    vehicles.forEach(vehicle => {
      items.add(
        vehicle
      );
    });

    console.log(groups, items);

    var options = {
      width: '100%',
    };

    const container = document.getElementById('visualization');
    if (container && items.length !== 0) {
      const timeline = new Timeline(container, vehicles, groups, options);

    }
  }
}
