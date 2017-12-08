import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  siteTitle = 'TfL Cycle Dock Info';
  @Input() pageTitle = 'Bike Info';
  @Input() pageSubtitle = 'Find the nearest bike point with available bikes or free docks';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // this.activatedRoute.data.subscribe(data => {
    //   this.pageTitle = data['pageTitle'];
    //   this.pageSubtitle = data['pageSubtitle'];
    // });
  }
}
