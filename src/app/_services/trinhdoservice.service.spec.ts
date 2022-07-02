import { TestBed } from '@angular/core/testing';

import { TrinhdoserviceService } from './trinhdoservice.service';

describe('TrinhdoserviceService', () => {
  let service: TrinhdoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrinhdoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
