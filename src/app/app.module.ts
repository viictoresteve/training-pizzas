import { TimelineEffects } from './vehicles-board/effects/timeline.effects';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './vehicles-board/timeline/timeline.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { VehiclesHttpService } from './vehicles-board/services/vehicles-http.service';
import { VehicleReducer } from './vehicles-board/reducers/vehicles-reducer';
import { VehiclesBoardComponent } from './vehicles-board/vehicles-board.component';
import { MechanicReducer } from './vehicles-board/reducers/mechanics-reducer';


const entityMetadata: EntityMetadataMap = {
  Vehicle: {
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  },
  Mechanic: {
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  }
};


@NgModule({
  declarations: [
    AppComponent,
    VehiclesBoardComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot({
      vehicle: VehicleReducer,
      mechanic: MechanicReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EntityDataModule.forRoot({}),
    EffectsModule.forRoot([TimelineEffects]),

  ],
  providers: [
    VehiclesHttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private eds: EntityDefinitionService,

  ) {
  }

}
