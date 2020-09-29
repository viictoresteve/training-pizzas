import { VehiclesHttpService } from '../services/vehicles-http.service';
import { GetItemsAction, VehicleActionTypes, GetItemsSuccessAction, GetItemsFailureAction } from '../vehicles.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MechanicActionTypes, GetMechanicsSuccessAction, GetMechanicsFailureAction, GetMechanicsAction } from '../mechanics.actions';

@Injectable()
export class TimelineEffects {
    @Effect() loadVehicles = this.actions$.pipe(
        ofType<GetItemsAction>(VehicleActionTypes.GET_ITEMS),
        mergeMap(
            () => this.vehiclesService.getVehicles()
                .pipe(
                    map(res => new GetItemsSuccessAction(res)),
                    catchError(error => {
                        console.log('ERROR => ', error);
                        return of(new GetItemsFailureAction(error));

                    })
                )
        )
    );
    @Effect() loadMechanics = this.actions$.pipe(
        ofType<GetMechanicsAction>(MechanicActionTypes.GET_MECHANICS),
        mergeMap(
            () => this.vehiclesService.getMechanics()
                .pipe(
                    map(res => new GetMechanicsSuccessAction(res)),
                    catchError(error => {
                        console.log('ERROR => ', error);
                        return of(new GetMechanicsFailureAction(error));

                    })
                )
        )
    );
    
    constructor(private actions$: Actions, private vehiclesService: VehiclesHttpService) { }
}
