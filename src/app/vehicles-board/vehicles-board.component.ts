import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './models/vehicle';
import { VehiclesEntityService } from './vehicles-entity.service';

@Component({
  selector: 'app-pizzas-board',
  templateUrl: './vehicles-board.component.html',
  styleUrls: ['./vehicles-board.component.scss']
})
export class PizzasBoardComponent implements OnInit {
  chefs: any;
  vehicles: any;
  vehicles$: Observable<Vehicle[]>;

  constructor(private vehiclesService: VehiclesEntityService) { }

  ngOnInit(): void {

    this.vehicles$ = this.vehiclesService.entities$.pipe(map(x => {
      return x;
    }));

    // this.vehiclesService.getChefs().subscribe(res => {
    //   this.chefs = res;
    //   return this.chefs;
    // });
    // this.vehiclesService.getVehicles().subscribe(res => {
    //   this.vehicles = res;
    //   return this.vehicles;
    // });
  }

}
