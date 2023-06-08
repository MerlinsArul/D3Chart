import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { LinebarComponent } from './linebar/linebar.component';

const routes: Routes = [
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'donut', component: DonutchartComponent },
  { path: 'linebar', component: LinebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
