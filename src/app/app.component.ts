import { BikePointService } from './bikePoint.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TfL Bike Points';
  mapCentre = { lat: 51.5081, lng: -0.1248, zoom: 16 };
  markers = [];
  infoWindowOpened = null;

  constructor(private bikePointService: BikePointService) {}

  ngOnInit(): void {
    this.markers = this.bikePointService.getBikePoints();
  }

  clickedMarker(label: string, infoWindow, index: number) {
    if (this.infoWindowOpened ===  infoWindow) {
      return;
    }
    if (this.infoWindowOpened !== null) {
      this.infoWindowOpened.close();
    }
    this.infoWindowOpened = infoWindow;
  }
}
