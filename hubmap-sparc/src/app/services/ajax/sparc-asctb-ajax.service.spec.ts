import { TestBed } from '@angular/core/testing';

import { SparcAsctbAjaxService } from './sparc-asctb-ajax.service';

describe('SparcAsctbAjaxService', () => {
  let service: SparcAsctbAjaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparcAsctbAjaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
