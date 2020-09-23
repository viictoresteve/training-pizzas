import { Vehicle } from './models/vehicle';
import { Action } from "@ngrx/store";

export enum VehicleActionTypes {
    ADD_ITEM = '[TIMELINE] Add Item',
    DELETE_ITEM = '[TIMELINE] Delete Item',
}

export class AddItemAction implements Action {
    readonly type = VehicleActionTypes.ADD_ITEM;

    constructor(public payload: Vehicle) {

    }

}
export class DeleteItemAction implements Action {
    readonly type = VehicleActionTypes.DELETE_ITEM;

    constructor(public payload: string) {

    }

}

export type VehiclesAction = AddItemAction | DeleteItemAction;
