

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vehicle } from '../models/vehicle';


@Injectable()
export class VehiclesHttpService {

    private API_URL = 'http://localhost:3000/';
    constructor(private http: HttpClient) {
    }
    getVehicles(): Observable<Vehicle[]> {

        return this.http.get<Vehicle[]>(this.API_URL + 'vehicles')
            .pipe(
                map(res => {
                    return res;
                })
            );
    }
}
