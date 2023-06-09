import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalechartComponent } from './scalechart.component';

describe('ScalechartComponent', () => {
  let component: ScalechartComponent;
  let fixture: ComponentFixture<ScalechartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScalechartComponent]
    });
    fixture = TestBed.createComponent(ScalechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
