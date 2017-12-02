
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { BikePointService } from './services/bike-point/bike-point.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSh9mnb2WeKtJkh9pVnL12GVawgZv6ioE'
    }),
    HttpClientModule
  ],
  providers: [BikePointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
