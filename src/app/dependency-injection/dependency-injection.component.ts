import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ChartDataService } from './chart-data.service';


@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit{

  constructor(private chartDataService:ChartDataService){ }

  ngOnInit() {
    this.renderChart();
  }

  renderChart() {

    const data= this.chartDataService.getData().map(item => item)

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const svg = d3
      .select('#chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);


    const pie = d3
      .pie()
      .value((d: any) => d)
      .sort(null);

    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    const arcs = svg
      .selectAll('arc')
      .data(pie(data.map(data=>data.value)))
      .enter()
      .append('g');

    arcs
      .append('path')
      .attr('d', (d: any) => arc(d))
      .attr('fill', (d: any, i: any) => color(i));

    arcs
      .append('text')
      .attr('transform', (d: any) => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text((d: any) => d.data.label);
  }
}
