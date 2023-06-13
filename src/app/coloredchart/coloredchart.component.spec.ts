import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredchartComponent } from './coloredchart.component';

describe('ColoredchartComponent', () => {
  let component: ColoredchartComponent;
  let fixture: ComponentFixture<ColoredchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColoredchartComponent]
    });
    fixture = TestBed.createComponent(ColoredchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
