import { AirQualityForecast, AirQualityForecastPeriod } from './../../../models/air-quality-forecast';
import { Component, OnInit } from '@angular/core';
import { AirQualityService } from '../../../services/air-quality/air-quality.service';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent implements OnInit {
  // airQualityData: AirQualityForecast;
  airQualityData: any;
  airQualityModalClasses = 'modal';

  constructor(private airQualityService: AirQualityService) { }

  ngOnInit() {
    this.airQualityService.getAirQualityForecast().subscribe(data => {
      this.airQualityData = data;

      /*this.airQualityData = new AirQualityForecast(data.disclaimerText);
      data.forEach(forecast => {
        this.airQualityData.currentForecast.push(
          new AirQualityForecastPeriod(
            forecast.forecastType,
            forecast.forecastBand,
            forecast.forecastSummary,
            forecast.forecastText
          )
        );
      });
      */
    });
  }

  clickAirQualityForecast() {
    console.log(this.airQualityData);
    this.airQualityModalClasses = 'modal is-active';
  }

  closeAirQualityForecast() {
    this.airQualityModalClasses = 'modal';
  }

}
