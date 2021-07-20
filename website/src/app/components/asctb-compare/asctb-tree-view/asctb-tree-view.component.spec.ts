import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsctbTreeViewComponent } from './asctb-tree-view.component';

describe('AsctbTreeViewComponent', () => {
  let component: AsctbTreeViewComponent;
  let fixture: ComponentFixture<AsctbTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsctbTreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsctbTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
