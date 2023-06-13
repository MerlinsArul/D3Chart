import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const data = [
      { category: 'A', value: 10 },
      { category: 'B', value: 20 },
      { category: 'C', value: 15 },
      { category: 'D', value: 25 },
      { category: 'E', value: 12 }
    ];

    const element = this.chartContainer.nativeElement;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = element.offsetWidth - margin.left - margin.right;
    const height = element.offsetHeight - margin.top - margin.bottom;

    const svg = d3.select(element)
      .append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    const chart = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(data.map(d => d.category));


      const y = d3.scaleLinear()
  .rangeRound([height, 0])
  .domain([0, data.reduce((max, d) => Math.max(max, d.value), 0)]);


    chart.append('g')
      .attr('class', 'axis-x')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    chart.append('g')
      .attr('class', 'axis-y')
      .call(d3.axisLeft(y).ticks(10));

    chart.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.category)!)
      .attr('y', d => y(d.value))
      .attr('fill','pink')
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.value));
  }

}
