import { Component, OnInit } from '@angular/core';
import { PizzasService } from './pizzas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizzas-board',
  templateUrl: './pizzas-board.component.html',
  styleUrls: ['./pizzas-board.component.scss']
})
export class PizzasBoardComponent implements OnInit {
  chefs: any;
  vehicles: any;
  constructor(private pizzasService: PizzasService) { }

  ngOnInit(): void {
    this.pizzasService.getChefs().subscribe(res => {
      this.chefs = res;
      return this.chefs;
    });
    this.pizzasService.getVehicles().subscribe(res => {
      this.vehicles = res;
      return this.vehicles;
    });
  }

}
