import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasBoardComponent } from './pizzas-board/pizzas-board.component';
import { ChefsComponent } from './pizzas-board/chefs/chefs.component';
import { TimelineComponent } from './pizzas-board/timeline/timeline.component';
import { PizzasService } from './pizzas-board/pizzas.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  providers: [PizzasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
