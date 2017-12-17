import { AirQualityForecast, AirQualityForecastPeriod } from './../../../models/air-quality-forecast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AirQualityService } from '../../../_services/air-quality/air-quality.service';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent implements OnInit {
  buttonDisabled = false;
  airQualityData: any = this.getDummyAirQualityDataModal();
  airQualityModalClasses = 'modal';

  constructor(private airQualityService: AirQualityService) { }

  ngOnInit() {
  }

  clickAirQualityForecast() {
    this.buttonDisabled = true;
    this.airQualityService.getAirQualityForecast().subscribe(
      data => {
        this.airQualityData = data;
        this.airQualityModalClasses = 'modal is-active';
        this.buttonDisabled = false;
      },
      error => {
        this.buttonDisabled = true;
        console.log(error);
      });
  }

  closeAirQualityForecast() {
    this.airQualityModalClasses = 'modal';
  }

  getDummyAirQualityDataModal() {
      return {
        disclaimerText: '',
        currentForecast: [
          {
            forecastType: '',
            forecastBand: '',
            forecastSummary: '',
            forecastText: ''
          }
        ]
      };
  }

}
