import { Component, OnInit, Input } from '@angular/core';
import { DataSet } from 'vis-data';
import { Timeline } from 'vis-timeline';
import * as moment from 'moment';
import { group } from 'console';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() chefs;
  @Input() vehicles;
  constructor() {
  }

  ngOnInit(): void {
    if (this.chefs && this.vehicles) {
      this.generateTL();
    }

  }

  generateTL(): void {

    // create groups to highlight groupUpdate
    let groups = [];
    this.chefs.forEach(chef => {
      groups.push({
        id: chef.id,
        content: chef.name
      });
    });

    console.log('gps', groups);


    let items = [];


    this.vehicles.forEach(vehicle => {
      items.push({
        id: vehicle.id,
        content: vehicle.name,
        start: this.randomDate(new Date(2012, 0, 1), new Date()),
        end: this.randomDate(new Date(2012, 0, 1), new Date()),
        // tslint:disable-next-line: radix
        group: parseInt((Math.random() * groups.length).toString())
      });
    });

    console.log('items', items);

    var options = {
      autoResize: true,
      width: '100%',
      height: '750px'
    };


    const container = document.getElementById('visualization');
    if (container) {
      const timeline = new Timeline(container, items, groups, options);
    }



  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

}
