import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsctbCompareComponent } from './asctb-compare.component';

describe('AsctbCompareComponent', () => {
  let component: AsctbCompareComponent;
  let fixture: ComponentFixture<AsctbCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsctbCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsctbCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
