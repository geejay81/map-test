import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AirQualityService {
  private forecasts = [];
  private airQualityUrl = 'https://api.tfl.gov.uk/AirQuality';

  constructor(private http: HttpClient) { }

  getAirQualityForecast(): Observable<any> {
    return this.http.get<any>(this.airQualityUrl);
  }
}
