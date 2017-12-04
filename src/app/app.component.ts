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
  siteTitle = 'TfL Cycle Dock Info';
  pageTitle = 'Bike Points';
  pageSubtitle = 'Find the nearest bike point with available bikes or free docks';
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
  modalClasses = 'modal';
  progressType: 'is-success';
  selectedBikePoint = {
    lng: this.mapCentre.lng,
    lat: this.mapCentre.lat,
    location: '',
    bikes: 0,
    emptyDocks: 0,
    docks: 0
  };

  constructor(
    private bikePointService: BikePointService
  ) {}

  ngOnInit(): void {
    this.markers = this.bikePointService.getBikePoints();
  }

  clickedMarker(label: string, index: number) {
    this.selectedBikePoint = this.markers[index];
    this.modalClasses = 'modal is-active';
    // TODO: Centre map on clicked marker
  }

  closeModal() {
    this.modalClasses = 'modal';
  }

  getProgressClasses() {
    let progressClasses = 'progress';
    const tracking = this.lookingFor === 'Bike' ? this.selectedBikePoint.bikes : this.selectedBikePoint.emptyDocks
    const usage = tracking / this.selectedBikePoint.docks;
    if (usage < 0.2) {
      progressClasses += ' is-danger';
    } else if (usage < 0.3) {
      progressClasses += ' is-warning';
    } else {
      progressClasses += ' is-success';
    }
    return progressClasses;
  }

  refreshAll() {
    // trigger redraw of the map so that the markers can be refilled
    this.map.triggerResize();
  }
}
