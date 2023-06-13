import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { LinebarComponent } from './linebar/linebar.component';
import { ScalechartComponent } from './scalechart/scalechart.component';
import { CoordinateComponent } from './coordinate/coordinate.component';
import { GroupedChartComponent } from './grouped-chart/grouped-chart.component';
import { ColoredchartComponent } from './coloredchart/coloredchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ColorpieComponent } from './colorpie/colorpie.component';
import { GroupedChart1Component } from './grouped-chart1/grouped-chart1.component';
import { Piechart1Component } from './piechart1/piechart1.component';
import { LinechartComponent } from './linechart/linechart.component';
import { FactoryComponent } from './factory/factory.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { ChartDataService } from './dependency-injection/chart-data.service';
import { ScatterComponent } from './scatter/scatter.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DonutchartComponent,
    LinebarComponent,
    ScalechartComponent,
    CoordinateComponent,
    GroupedChartComponent,
    ColoredchartComponent,
    PiechartComponent,
    ColorpieComponent,
    GroupedChart1Component,
    Piechart1Component,
    LinechartComponent,
    FactoryComponent,
    DependencyInjectionComponent,
    ScatterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChartDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
