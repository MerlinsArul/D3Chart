import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ColoredchartComponent } from './coloredchart/coloredchart.component';
import { ColorpieComponent } from './colorpie/colorpie.component';
import { CoordinateComponent } from './coordinate/coordinate.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { FactoryComponent } from './factory/factory.component';
import { GroupedChartComponent } from './grouped-chart/grouped-chart.component';
import { GroupedChart1Component } from './grouped-chart1/grouped-chart1.component';
import { LinebarComponent } from './linebar/linebar.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { Piechart1Component } from './piechart1/piechart1.component';
import { ScalechartComponent } from './scalechart/scalechart.component';
import { ScatterComponent } from './scatter/scatter.component';

const routes: Routes = [
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'donut', component: DonutchartComponent },
  { path: 'linebar', component: LinebarComponent },
  {path:'scalechart',component:ScalechartComponent},
  {path:'coordinate',component:CoordinateComponent},
  {path:'groupedchart',component:GroupedChartComponent},
  {path:'piechart',component:PiechartComponent},
  {path:'coloredchart',component:ColoredchartComponent},
  {path:'colorpie',component:ColorpieComponent},
  {path:'groupedbar',component:GroupedChart1Component},
  {path:'pietool',component:Piechart1Component},
  {path:'line',component:LinechartComponent},
  {path:'factory',component:FactoryComponent},
  {path:'di',component:DependencyInjectionComponent},
  {path:'scatter',component:ScatterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
