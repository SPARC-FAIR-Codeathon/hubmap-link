import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsctbGenerateComponent } from './asctb-generate.component';

describe('AsctbGenerateComponent', () => {
  let component: AsctbGenerateComponent;
  let fixture: ComponentFixture<AsctbGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsctbGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsctbGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
