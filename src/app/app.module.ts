
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { BikePointService } from './bikePoint.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR API KEY'
    }),
    HttpClientModule
  ],
  providers: [BikePointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
