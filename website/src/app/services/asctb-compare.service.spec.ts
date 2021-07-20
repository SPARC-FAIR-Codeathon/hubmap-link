import { TestBed } from '@angular/core/testing';

import { AsctbCompareService } from './asctb-compare.service';

describe('AsctbCompareService', () => {
  let service: AsctbCompareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsctbCompareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
