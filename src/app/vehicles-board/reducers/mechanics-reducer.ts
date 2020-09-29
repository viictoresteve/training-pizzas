import { Mechanic } from '../models/mechanic';
import { MechanicsAction, MechanicActionTypes } from '../mechanics.actions';

export interface MechanicState {
    list: Mechanic[];
    error: Error;
}

const initialState: MechanicState = {
    list: [],
    error: undefined
};

export function MechanicReducer(
    state: MechanicState = initialState,
    action: MechanicsAction) {
    switch (action.type) {
        case MechanicActionTypes.GET_MECHANICS:
            return { ...state };
        case MechanicActionTypes.GET_MECHANICS_SUCCESS:
            return { ...state, list: action.payload };
        case MechanicActionTypes.GET_MECHANICS_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}
