import { LineService } from './../../services/line/line.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  lineId = 'Hello';
  heroClasses = 'hero';
  line: any;

  constructor(
    private route: ActivatedRoute,
    private lineService: LineService
  ) {
    this.route.params.subscribe(
      data => {
        this.lineId = data['lineId'];
      }
    );
    this.lineService.getLineStatuses(this.lineId, true).subscribe(
      data => {
        this.line = data[0];
    });
  }

  ngOnInit() {
  }

}
