import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Mechanic } from './models/mechanic';
@Injectable({ providedIn: 'root' })

export class MechanicsEntityService extends EntityCollectionServiceBase<Mechanic> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Mechanic', serviceElementsFactory);
    }
}
