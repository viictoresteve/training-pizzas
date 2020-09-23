import { tap, first, filter } from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiclesEntityService } from '../vehicles-entity.service';


@Injectable()
export class VehiclesResolver implements Resolve<boolean> {


    constructor(private vehiclesService: VehiclesEntityService) {
    }

    resolve(route, state): Observable<boolean> {

        return this.vehiclesService.loaded$.pipe(
            tap(loaded => {
                console.log('resolv', loaded);
                
                if (!loaded) {
                    console.log('!loaded resolver');

                    this.vehiclesService.getAll();
                }
            }),
            filter(loaded => !!loaded),
            first()
        );
    }
}

