import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css'],
})
export class LinechartComponent implements OnInit {
  ngOnInit(): void {
    const jsonData = [
      { date: '2023-06-01', value: 10, color: '#ff0000' },
      { date: '2023-06-02', value: 20, color: '#00ff00' },
      { date: '2023-06-03', value: 15, color: '#0000ff' },
    ];

    const data = jsonData.map((d: any) => ({ ...d, date: new Date(d.date) }));

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select('#chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    const line = d3
      .line()
      .x((d: any) => x(d.date))
      .y((d: any) => y(d.value));
    const minDate = d3.min(data, (d: any) => d.date);
    const maxDate = d3.max(data, (d: any) => d.date);
    x.domain([minDate, maxDate]);
    y.domain([0, d3.max(data, (d: any) => d.value)]);
    svg
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line)
      .style('stroke', (d: any) => d[0].color);

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));
    svg.append('g').call(d3.axisLeft(y));
  }
}
