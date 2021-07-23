import { TestBed } from '@angular/core/testing';

import { MetaDataAjaxService } from './meta-data-ajax.service';

describe('MetaDataAjaxService', () => {
  let service: MetaDataAjaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaDataAjaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
