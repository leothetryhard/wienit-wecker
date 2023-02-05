import { TestBed } from '@angular/core/testing';

import { WeckerDataService } from './wecker-data.service';

describe('WeckerDataService', () => {
  let service: WeckerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeckerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
