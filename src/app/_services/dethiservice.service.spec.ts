import { TestBed } from '@angular/core/testing';

import { DethiserviceService } from './dethiservice.service';

describe('DethiserviceService', () => {
  let service: DethiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DethiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
