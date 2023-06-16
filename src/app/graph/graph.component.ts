import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit,AfterViewInit {

  @ViewChild('chart', { static: false }) private chartContainer!: ElementRef;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.drawGraph();
  }

  drawGraph() {
    const data = this.generateRandomData(10);

    const element = this.chartContainer.nativeElement;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = element.offsetWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(element)
      .append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', 400);

    const chart = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);


    const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(data.map(d => d.label));

    const y = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([0, Math.max(...data.map(d => d.value))]);



    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y).ticks(10);


    chart.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    chart.append('g')
      .attr('class', 'y-axis')
      .call(yAxis);

    chart.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.label)!)
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('fill','purple')
      .attr('height', d => height - y(d.value));
  }

  generateRandomData(numBars: number) {
    const data = [];
    for (let i = 0; i < numBars; i++) {
      data.push({
        label: `Label ${i + 1}`,
        value: Math.floor(Math.random() * 100)
      });
    }
    return data;
  }
}
