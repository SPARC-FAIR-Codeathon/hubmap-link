import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsctbScatterplotViewComponent } from './asctb-scatterplot-view.component';

describe('AsctbScatterplotViewComponent', () => {
  let component: AsctbScatterplotViewComponent;
  let fixture: ComponentFixture<AsctbScatterplotViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsctbScatterplotViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsctbScatterplotViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
