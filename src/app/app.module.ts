import { VehiclesDataService } from './vehicles-board/services/vehicles-data.service';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasBoardComponent } from './vehicles-board/vehicles-board.component';
import { ChefsComponent } from './vehicles-board/chefs/chefs.component';
import { TimelineComponent } from './vehicles-board/timeline/timeline.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VehiclesService } from './vehicles-board/vehicles.service';
import { environment } from 'src/environments/environment';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { VehiclesHttpService } from './vehicles-board/services/vehicles-http.service';
import { VehiclesEntityService } from './vehicles-board/vehicles-entity.service';
import { VehiclesResolver } from './vehicles-board/services/vehicles.resolver';
import { VehicleReducer } from './vehicles-board/reducers/vehicles-reducer';


const entityMetadata: EntityMetadataMap = {
  Vehicle: {
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  }
};


@NgModule({
  declarations: [
    AppComponent,
    PizzasBoardComponent,
    ChefsComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot({
      vehicle: VehicleReducer
    })
    // , {
    //     metaReducers,
    //     runtimeChecks : {
    //         strictStateImmutability: true,
    //         strictActionImmutability: true,
    //         strictActionSerializability: true,
    //         strictStateSerializability: true
    //     }
    // })
    ,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    }),
    EntityDataModule.forRoot({}),
    EffectsModule.forRoot([]),

  ],
  providers: [
    VehiclesService,
    VehiclesHttpService,
    VehiclesEntityService,
    VehiclesResolver,
    VehiclesDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private vehiclesDataService: VehiclesDataService) {
    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Vehicle', vehiclesDataService);

  }

}
