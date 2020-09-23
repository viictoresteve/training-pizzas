import { VehiclesAction, VehicleActionTypes } from './../vehicles.actions';
import { Vehicle } from './../models/vehicle';


const initialState: Array<Vehicle> = [
    {
        name: 'Kia Karens'
    },
    {
        name: 'Suzuki Swift'
    }
];

export function VehicleReducer(
    state: Array<Vehicle> = initialState,
    action: VehiclesAction) {
    console.log('initial state is: ', initialState);

    console.log('state and action are: ', state, action);

    switch (action.type) {
        case VehicleActionTypes.ADD_ITEM:
            return [...state, action.payload];
        case VehicleActionTypes.DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}
