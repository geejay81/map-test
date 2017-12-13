import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  lineId: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      data => {
        let lineId = data['lineId'];
      }
    );
  }

  ngOnInit() {
  }

}
