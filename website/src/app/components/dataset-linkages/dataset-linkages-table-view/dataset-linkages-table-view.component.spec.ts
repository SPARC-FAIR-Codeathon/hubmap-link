import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetLinkagesTableViewComponent } from './dataset-linkages-table-view.component';

describe('DatasetLinkagesTableViewComponent', () => {
  let component: DatasetLinkagesTableViewComponent;
  let fixture: ComponentFixture<DatasetLinkagesTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetLinkagesTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetLinkagesTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
