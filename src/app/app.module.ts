import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { BikePointService } from './services/bike-point/bike-point.service';
import { AirQualityService } from './services/air-quality/air-quality.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AirQualityComponent } from './tfl-components/air-quality/air-quality/air-quality.component';
import { MapComponent } from './map/map.component';
import { TravelComponent } from './travel/travel.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: 'find',
    component: MapComponent,
    data: {
      pageTitle: 'Bike Points',
      pageSubTitle: 'Find the nearest bike point with available bikes or free docks'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      pageTitle: 'About',
      pageSubTitle: 'What does this site do?'
    }
  },
  { path: '', redirectTo: '/find', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AirQualityComponent,
    MapComponent,
    TravelComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapApiKey
    }),
    HttpClientModule
  ],
  providers: [BikePointService, AirQualityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
