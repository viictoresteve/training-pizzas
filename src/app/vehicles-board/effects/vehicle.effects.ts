import { VehiclesHttpService } from './../services/vehicles-http.service';
import { GetItemsAction, VehicleActionTypes, GetItemsSuccessAction, GetItemsFailureAction } from './../vehicles.actions';
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class VehicleEffects {
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

    constructor(private actions$: Actions, private vehiclesService: VehiclesHttpService) { }



}