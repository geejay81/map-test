import { TestBed, inject } from '@angular/core/testing';

import { BikePointService } from './bikePoint.service';

describe('BikePointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikePointService]
    });
  });

  it('should be created', inject([BikePointService], (service: BikePointService) => {
    expect(service).toBeTruthy();
  }));
});
