import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  siteTitle = 'TfL Cycle Dock Info';
  pageTitle = 'Bike Info';
  pageSubtitle = 'Find the nearest bike point with available bikes or free docks';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.pageTitle = data.state.root.firstChild.data.pageTitle;
        this.pageSubtitle = data.state.root.firstChild.data.pageSubtitle;
      }
    });
  }
}
