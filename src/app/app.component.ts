import { BikePointService } from './services/bike-point/bike-point.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';

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
  lookingForOptions = [
    { id: 'Bike', value: 'I\'m looking for a bike'},
    { id: 'Dock', value: 'I\'m looking for a free dock'}
  ];
  lookingFor = 'Bike';

  constructor(private bikePointService: BikePointService) {}

  ngOnInit(): void {
    this.markers = this.bikePointService.getBikePoints();
  }

  lookingForChanged() {
    //
    alert('This will update the map when I\'ve set it up properly');
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
