import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedChartComponent } from './grouped-chart.component';

describe('GroupedChartComponent', () => {
  let component: GroupedChartComponent;
  let fixture: ComponentFixture<GroupedChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupedChartComponent]
    });
    fixture = TestBed.createComponent(GroupedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
