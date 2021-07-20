import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsctbTableViewComponent } from './asctb-table-view.component';

describe('AsctbTableViewComponent', () => {
  let component: AsctbTableViewComponent;
  let fixture: ComponentFixture<AsctbTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsctbTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsctbTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
