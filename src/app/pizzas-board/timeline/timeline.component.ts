import { Component, OnInit, Input } from '@angular/core';
import { DataSet } from 'vis-data';
import { Timeline } from 'vis-timeline';
import * as moment from 'moment';

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
    const now = moment().minutes(0).seconds(0).milliseconds(0);

    // create groups to highlight groupUpdate
    const groups = [];
    this.chefs.forEach(chef => {
      groups.push({
        id: chef.id,
        content: chef.name
      });
    });



    const items = [];


    this.vehicles.forEach(vehicle => {
      const start = now.clone().add(Math.random() * 200, 'hours');
      const group = Math.floor(Math.random() * groups.length);

      items.push({
        id: vehicle.id,
        content: vehicle.name,
        start,
        // tslint:disable-next-line: radix
        group
      });
    });

    var options = {
      editable: false,
      stack: true,
      verticalScroll: true,
      groupOrder: 'id'
    };

    const container = document.getElementById('visualization');
    if (container) {
      const timeline = new Timeline(container, items, groups, options);
      console.log(timeline);

    }
  }
}
