import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { LinebarComponent } from './linebar/linebar.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DonutchartComponent,
    LinebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
