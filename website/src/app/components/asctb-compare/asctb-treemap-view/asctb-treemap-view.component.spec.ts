import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsctbTreemapViewComponent } from './asctb-treemap-view.component';

describe('AsctbTreemapViewComponent', () => {
  let component: AsctbTreemapViewComponent;
  let fixture: ComponentFixture<AsctbTreemapViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsctbTreemapViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsctbTreemapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
