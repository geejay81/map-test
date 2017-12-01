import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BikePointService {
  public markers = [];
  constructor(private http: HttpClient) { }

  getBikePoints() {
    this.http.get<Array<any>>('https://api.tfl.gov.uk/BikePoint')
    .subscribe(
      data => {
        data.forEach(point => {
            let bikes = '0';
            let emptyDocks = '0';
            let docks = '0';

            point.additionalProperties.forEach(property => {
              if (property.key === 'NbBikes') {
                bikes = property.value;
              } else if (property.key === 'NbEmptyDocks') {
                emptyDocks = property.value;
              } else if (property.key === 'NbDocks') {
                docks = property.value;
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
