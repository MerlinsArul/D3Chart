import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpieComponent } from './colorpie.component';

describe('ColorpieComponent', () => {
  let component: ColorpieComponent;
  let fixture: ComponentFixture<ColorpieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorpieComponent]
    });
    fixture = TestBed.createComponent(ColorpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
