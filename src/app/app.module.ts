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
import { LineService } from './services/line/line.service';
import { LineComponent } from './travel/line/line.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: {
      pageTitle: 'About',
      pageSubtitle: 'What does this site do?'
    }
  },
  {
    path: 'find',
    component: MapComponent,
    data: {
      pageTitle: 'Bike Points',
      pageSubtitle: 'Find the nearest bike point with available bikes or free docks'
    }
  },
  {
    path: 'travel',
    component: TravelComponent,
    data: {
      pageTitle: 'Travel',
      pageSubtitle: 'Travel and service updates from around the network'
    }
  },
  {
    path: 'line/:lineId',
    component: LineComponent,
    data: {
      pageTitle: 'Line Status',
      pageSubtitle: 'Status and disruption information by line'
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
    AboutComponent,
    LineComponent
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
  providers: [
    AirQualityService,
    BikePointService,
    LineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
