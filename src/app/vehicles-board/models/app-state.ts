import { VehicleState } from './../reducers/vehicles-reducer';
import { MechanicState } from '../reducers/mechanics-reducer';

export interface AppState {
    readonly vehicle: VehicleState;
    readonly mechanic: MechanicState;
}
