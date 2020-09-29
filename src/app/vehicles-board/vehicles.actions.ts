import { Vehicle } from './models/vehicle';
import { Action } from '@ngrx/store';

export enum VehicleActionTypes {
    GET_ITEMS = '[TIMELINE] Get Items',
    GET_ITEMS_SUCCESS = '[TIMELINE] Get Items Success',
    GET_ITEMS_FAILURE = '[TIMELINE] Get Items Failure',
    DELETE_ITEM = '[TIMELINE] Delete Item',
    DELETE_ITEM_SUCCESS = '[TIMELINE] Delete Items Success',
    DELETE_ITEM_FAILURE = '[TIMELINE] Delete Items Failure',
}

export class GetItemsAction implements Action {
    readonly type = VehicleActionTypes.GET_ITEMS;
}

export class GetItemsSuccessAction implements Action {
    readonly type = VehicleActionTypes.GET_ITEMS_SUCCESS;
    constructor(public payload: Array<Vehicle>) {
    }
}

export class GetItemsFailureAction implements Action {
    readonly type = VehicleActionTypes.GET_ITEMS_FAILURE;
    constructor(public payload: Error) { }
}

export type VehiclesAction = GetItemsAction | GetItemsSuccessAction |
    GetItemsFailureAction;
