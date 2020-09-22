import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Vehicle } from '../models/vehicle';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class VehiclesEntityService extends EntityCollectionServiceBase<Vehicle> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Course', serviceElementsFactory);
    }
}
