import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private httpClient: HttpClient) { }


  getChefs(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/chefs').pipe(map(res => {
      console.log('servicio', res);
      return res;
    }));


  }
  getVehicles(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/vehicles').pipe(map(res => {
      console.log('vehicles', res);
      return res;
    }));


  }

}
