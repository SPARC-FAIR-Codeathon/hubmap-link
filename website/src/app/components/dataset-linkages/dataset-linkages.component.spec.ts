import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetLinkagesComponent } from './dataset-linkages.component';

describe('DatasetLinkagesComponent', () => {
  let component: DatasetLinkagesComponent;
  let fixture: ComponentFixture<DatasetLinkagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetLinkagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetLinkagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
