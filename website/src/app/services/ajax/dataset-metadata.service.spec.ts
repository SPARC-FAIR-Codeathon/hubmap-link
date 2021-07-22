import { TestBed } from '@angular/core/testing';

import { DatasetMetadataService } from './dataset-metadata.service';

describe('DatasetMetadataService', () => {
  let service: DatasetMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasetMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
