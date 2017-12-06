import { BikePointService } from './services/bike-point/bike-point.service';
import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { AgmMap } from '@agm/core/directives/map';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(AgmMap) map: any;
  siteTitle = 'TfL Cycle Dock Info';
  pageTitle = 'Bike Points';
  pageSubtitle = 'Find the nearest bike point with available bikes or free docks';
  lookingFor = 'Bike';
  modalClasses = 'modal';
  progressType: 'is-success';
  controlsDisabled = false;
  mapCentre = { lat: 51.5081, lng: -0.1248, zoom: 16 };
  lookingForOptions = [
    { id: 'Bike', value: 'I\'m looking for a bike'},
    { id: 'Dock', value: 'I\'m looking for a free dock'}
  ];
  selectedBikePoint = {
    lng: this.mapCentre.lng,
    lat: this.mapCentre.lat,
    location: '',
    bikes: 0,
    emptyDocks: 0,
    docks: 0
  };
  markers = [];
  geolocation;

  constructor(
    private bikePointService: BikePointService
  ) {}

  ngOnInit(): void {
    this.refreshMarkersArray();
  }

  centreMap() {
    this.map.triggerResize();
  }

  clickedMarker(label: string, index: number) {
    this.selectedBikePoint = this.markers[index];
    this.modalClasses = 'modal is-active';
    this.mapCentre.lat = this.selectedBikePoint.lat;
    this.mapCentre.lng = this.selectedBikePoint.lng;
    this.centreMap();
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

  locateMe() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.mapCentre.lat = position.coords.latitude;
          this.mapCentre.lng = position.coords.longitude;
          console.log(position);
          this.centreMap();
        },
        error => {
          switch (error.code) {
            case 1:
              alert('Permission Denied');
              break;
            case 2:
              alert('Position Unavailable');
              break;
            case 3:
              alert('Timeout');
              break;
          }
        }
      );
    }
  }

  refreshMarkersArray() {
    this.controlsDisabled = true;
    this.bikePointService.getBikePoints()
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

            this.controlsDisabled = false;
        });
      },
      error => {
        this.controlsDisabled = false;
        console.log(error);
      }
    );
  }

  refreshAll() {
    this.controlsDisabled = true;
    this.refreshMarkersArray();
    this.map.triggerResize();
    this.controlsDisabled = false;
  }
}
