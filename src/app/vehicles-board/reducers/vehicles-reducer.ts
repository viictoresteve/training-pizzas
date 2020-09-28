import { VehiclesAction, VehicleActionTypes } from './../vehicles.actions';
import { Vehicle } from './../models/vehicle';

export interface VehicleState {
    list: Vehicle[];
    error: Error;
}

const initialState: VehicleState = {
    list: [],
    error: undefined
};

export function VehicleReducer(
    state: VehicleState = initialState,
    action: VehiclesAction) {

    switch (action.type) {
        case VehicleActionTypes.GET_ITEMS:
            return { ...state };
        case VehicleActionTypes.GET_ITEMS_SUCCESS:
            return { ...state, list: action.payload };
        case VehicleActionTypes.GET_ITEMS_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}
