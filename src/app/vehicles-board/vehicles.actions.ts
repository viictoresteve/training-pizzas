import { Vehicle } from './models/vehicle';
import { Action } from "@ngrx/store";

export enum VehicleActionTypes {
    ADD_ITEM = '[TIMELINE] Add Item',
    DELETE_ITEM = '[TIMELINE] Delete Item',
    GET_ITEMS = '[TIMELINE] Get Items',
    GET_ITEMS_SUCCESS = '[TIMELINE] Get Items Success',
    GET_ITEMS_FAILURE = '[TIMELINE] Get Items Failure',
}

export class AddItemAction implements Action {
    readonly type = VehicleActionTypes.ADD_ITEM;

    constructor(public payload: Vehicle) {

    }

}
export class DeleteItemAction implements Action {
    readonly type = VehicleActionTypes.DELETE_ITEM;
    constructor(public payload: string) { }
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

export type VehiclesAction = AddItemAction | DeleteItemAction | GetItemsAction | GetItemsSuccessAction |
    GetItemsFailureAction;
