import { EntityCollectionServiceElementsFactory, EntityDispatcherFactory } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasBoardComponent } from './vehicles-board/vehicles-board.component';
import { ChefsComponent } from './vehicles-board/chefs/chefs.component';
import { TimelineComponent } from './vehicles-board/timeline/timeline.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VehiclesService } from './vehicles-board/vehicles.service';
import { reducers } from './reducers';

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
    StoreModule.forRoot(reducers)
    // , {
    //     metaReducers,
    //     runtimeChecks : {
    //         strictStateImmutability: true,
    //         strictActionImmutability: true,
    //         strictActionSerializability: true,
    //         strictStateSerializability: true
    //     }
    // })
  ],
  providers: [VehiclesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
