import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsctbCompareSidebarComponent } from './asctb-compare-sidebar.component';

describe('AsctbCompareSidebarComponent', () => {
  let component: AsctbCompareSidebarComponent;
  let fixture: ComponentFixture<AsctbCompareSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsctbCompareSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsctbCompareSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
