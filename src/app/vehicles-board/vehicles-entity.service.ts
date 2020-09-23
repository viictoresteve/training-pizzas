import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Vehicle } from './models/vehicle';
@Injectable({ providedIn: 'root' })

export class VehiclesEntityService extends EntityCollectionServiceBase<Vehicle> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Vehicle', serviceElementsFactory);
    }
}
