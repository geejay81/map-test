import { TestBed, inject } from '@angular/core/testing';

import { BikePointService } from './bike-point.service';

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
