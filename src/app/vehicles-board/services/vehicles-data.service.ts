import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Vehicle } from '../models/vehicle';


@Injectable()
export class VehiclesDataService extends DefaultDataService<Vehicle> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Vehicle', http, httpUrlGenerator);
    }

    getAll(): Observable<Vehicle[]> {
        console.log('vehicles-data');
        
        return this.http.get('/vehicles')
            .pipe(map(res => res["payload"]));
    }
}