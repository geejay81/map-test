import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BikePointService {
  private bikePointUrl = 'https://api.tfl.gov.uk/BikePoint';

  constructor(private http: HttpClient) { }

  getBikePoints() {
    return this.http.get<Array<any>>(this.bikePointUrl);
  }

}
