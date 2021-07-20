import { TestBed } from '@angular/core/testing';

import { AsctbGenerateService } from './asctb-generate.service';

describe('AsctbGenerateService', () => {
  let service: AsctbGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsctbGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
