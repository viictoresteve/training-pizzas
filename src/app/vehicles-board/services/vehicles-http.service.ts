

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vehicle } from '../models/vehicle';
import { Mechanic } from '../models/mechanic';


@Injectable()
export class VehiclesHttpService {
    vehicles: Vehicle[];
    private API_URL = 'http://localhost:3000/';
    constructor(private http: HttpClient) {
    }
    getVehicles(): Observable<Vehicle[]> {
        this.vehicles = [];
        return this.http.get<Vehicle[]>(this.API_URL + 'vehicles')
            .pipe(
                map(res => {
                    res.forEach(vehicle => {
                        if (!(vehicle.start > vehicle.end)) {
                            this.vehicles.push(vehicle);
                        }
                    });
                    return this.vehicles;
                })
            );
    }
    getMechanics(): Observable<Mechanic[]> {

        return this.http.get<Mechanic[]>(this.API_URL + 'mechanics')
            .pipe(
                map(res => {
                    return res;
                })
            );
    }

}
