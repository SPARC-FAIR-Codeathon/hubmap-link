import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetLinkagesSidebarComponent } from './dataset-linkages-sidebar.component';

describe('DatasetLinkagesSidebarComponent', () => {
  let component: DatasetLinkagesSidebarComponent;
  let fixture: ComponentFixture<DatasetLinkagesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetLinkagesSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetLinkagesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
