import { Mechanic } from './models/mechanic';
import { Action } from "@ngrx/store";

export enum MechanicActionTypes {
    GET_MECHANICS = '[TIMELINE] Get Mechanics',
    GET_MECHANICS_SUCCESS = '[TIMELINE] Get Mechanics Success',
    GET_MECHANICS_FAILURE = '[TIMELINE] Get Mechanics Failure',
}

export class GetMechanicsAction implements Action {
    readonly type = MechanicActionTypes.GET_MECHANICS;
}

export class GetMechanicsSuccessAction implements Action {
    readonly type = MechanicActionTypes.GET_MECHANICS_SUCCESS;
    constructor(public payload: Array<Mechanic>) {
    }
}

export class GetMechanicsFailureAction implements Action {
    readonly type = MechanicActionTypes.GET_MECHANICS_FAILURE;
    constructor(public payload: Error) { }
}

export type MechanicsAction = GetMechanicsAction | GetMechanicsSuccessAction |
    GetMechanicsFailureAction;
