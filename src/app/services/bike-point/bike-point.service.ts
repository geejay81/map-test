import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BikePointService {
  private markers = [];
  private bikePointUrl = 'https://api.tfl.gov.uk/BikePoint';

  constructor(private http: HttpClient) { }

  getBikePoints() {
    this.http.get<Array<any>>(this.bikePointUrl)
    .subscribe(
      data => {
        data.forEach(point => {
            let bikes = 0;
            let emptyDocks = 0;
            let docks = 0;

            point.additionalProperties.forEach(property => {
              if (property.key === 'NbBikes') {
                bikes = Number(property.value);
              } else if (property.key === 'NbEmptyDocks') {
                emptyDocks = Number(property.value);
              } else if (property.key === 'NbDocks') {
                docks = Number(property.value);
              }
            });

            this.markers.push({
                lng: point.lon,
                lat: point.lat,
                location: point.commonName,
                bikes: bikes,
                emptyDocks: emptyDocks,
                docks: docks
              });
        });
      }
    );

    return this.markers;
  }

}
