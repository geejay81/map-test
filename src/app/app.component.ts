import { BikePointService } from './services/bike-point/bike-point.service';
import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { AgmMap } from '@agm/core/directives/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(AgmMap) private map: any;
  title = 'TfL Bike Points';
  mapCentre = { lat: 51.5081, lng: -0.1248, zoom: 16 };
  markers = [];
  infoWindowOpened = null;
  lookingForOptions = [
    { id: 'Bike', value: 'I\'m looking for a bike'},
    { id: 'Dock', value: 'I\'m looking for a free dock'}
  ];
  lookingFor = 'Bike';

  constructor(
    private bikePointService: BikePointService
  ) {}

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

  refreshAll() {
    // trigger redraw of the map so that the markers can be refilled
    this.map.triggerResize();
  }
}
