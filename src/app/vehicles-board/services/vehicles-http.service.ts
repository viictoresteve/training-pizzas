

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vehicle } from '../models/vehicle';


@Injectable()
export class VehiclesHttpService {
    constructor(private http: HttpClient) {

    }

    findAllVehicles(): Observable<Vehicle[]> {
        console.log('httpservice ');

        return this.http.get('localhost:3000/vehicles')
            .pipe(
                map(res => {
                    console.log('inside func', res);

                    return res['payload'];
                })
            );
    }

    findVehicleByUrl(vehicleUrl: string): Observable<Vehicle> {
        return this.http.get<Vehicle>(`/api/vehicles/${vehicleUrl}`);
    }

    saveVehicle(vehicleId: string | number, changes: Partial<Vehicle>) {
        return this.http.put('/api/vehicle/' + vehicleId, changes);
    }


}
