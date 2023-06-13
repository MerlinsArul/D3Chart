import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedChart1Component } from './grouped-chart1.component';

describe('GroupedChart1Component', () => {
  let component: GroupedChart1Component;
  let fixture: ComponentFixture<GroupedChart1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupedChart1Component]
    });
    fixture = TestBed.createComponent(GroupedChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
