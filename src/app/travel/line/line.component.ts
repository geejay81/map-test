import { LineService } from './../../services/line/line.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  lineId = 'Hello';
  heroClasses = 'hero';
  line: any;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private lineService: LineService
  ) {
    this.isLoading = true;
    this.route.params.subscribe(
      data => {
        this.lineId = data['lineId'];
        this.lineService.getLineStatuses(this.lineId, true).subscribe(
          line => {
            this.line = line[0];
        });
        this.isLoading = false;
      },
      err => {
        alert(err);
        this.isLoading = false;
      }
    );
  }

  ngOnInit() {
  }

}
