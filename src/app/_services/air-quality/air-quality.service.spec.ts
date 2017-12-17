import { TestBed, inject } from '@angular/core/testing';

import { AirQualityService } from './air-quality.service';

describe('AirQualityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirQualityService]
    });
  });

  it('should be created', inject([AirQualityService], (service: AirQualityService) => {
    expect(service).toBeTruthy();
  }));
});
