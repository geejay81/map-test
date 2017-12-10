import { LineService } from './../services/line/line.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  lineStatuses = [];

  constructor(
    private lineService: LineService
  ) { }

  ngOnInit() {
    this.refreshLineStatuses('tube, cable-car, dlr, tram');
  }

  getLinesByMode(mode: string) {
    return this.lineStatuses.filter(l => l.modeName === mode);
  }

  refreshLineStatuses(mode: string) {
    this.lineService.getAllStatuses(false, mode).subscribe(
      data => {
        this.lineStatuses = data;
      }
    );
  }

}
