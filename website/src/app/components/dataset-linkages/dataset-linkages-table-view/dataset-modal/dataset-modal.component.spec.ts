import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetModalComponent } from './dataset-modal.component';

describe('DatasetModalComponent', () => {
  let component: DatasetModalComponent;
  let fixture: ComponentFixture<DatasetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
