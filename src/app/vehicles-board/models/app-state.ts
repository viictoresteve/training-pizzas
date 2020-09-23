import { VehicleState } from './../reducers/vehicles-reducer';

export interface AppState {
    readonly vehicle: VehicleState;
}
