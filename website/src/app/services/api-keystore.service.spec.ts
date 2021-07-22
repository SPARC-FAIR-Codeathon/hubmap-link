import { TestBed } from '@angular/core/testing';

import { ApiKeystoreService } from './api-keystore.service';

describe('ApiKeystoreService', () => {
  let service: ApiKeystoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiKeystoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
