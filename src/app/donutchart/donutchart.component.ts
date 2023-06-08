import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import { POPULATION } from 'src/data';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})
export class DonutchartComponent implements OnInit {
  title = 'Donut Chart';

  private width!: number
  private height!: number;

  private svg: any;   

  private radius!: number;

  private arc: any;
  private pie: any;
  private color: any;

  private g: any;

  constructor() {}

  ngOnInit() {
      this.initSvg();
      this.drawChart(POPULATION);
  }

  private initSvg() {
      this.svg = d3.select('svg');

      this.width = +this.svg.attr('width');
      this.height = +this.svg.attr('height');
      this.radius = Math.min(this.width, this.height) / 2;

      this.color = d3Scale.scaleOrdinal()
          .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

      this.arc = d3Shape.arc()
          .outerRadius(this.radius - 10)
          .innerRadius(this.radius - 100);

      this.pie = d3Shape.pie()
          .sort(null)
          .value((d: any) => d.population);

      this.svg = d3.select('svg')
          .append('g')
          .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
  }

  private drawChart(data: any[]) {
      let g = this.svg.selectAll('.arc')
          .data(this.pie(data))
          .enter().append('g')
          .attr('class', 'arc');

      g.append('path')
          .attr('d', this.arc)
          .style('fill', (d:any) => this.color(d.data.age));

      g.append('text')
          .attr('transform', (d:any) => 'translate(' + this.arc.centroid(d) + ')')
          .attr('dx', '-.75em')
          .text((d:any) => d.data.age);
  }
}
