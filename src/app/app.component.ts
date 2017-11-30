import { BikePointService } from './bike-point.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TfL Bike Points';
  mapCentre = { lat: 51.5081, lng: -0.1248, zoom: 14 };
  bikeService = new BikePointService();
  markers = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get<Array<any>>('https://api.tfl.gov.uk/BikePoint')
      .subscribe(
        data => {
          data.forEach(marker => {
             this.markers.push({ lng: marker.lon, lat: marker.lat, title: marker.commonName });
          });
        }
      );
  }
}
