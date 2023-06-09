import { AfterContentInit, Component } from '@angular/core';
import * as d3 from 'd3';
import { exponentialData } from 'src/data';

@Component({
  selector: 'app-coordinate',
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.css'],
})
export class CoordinateComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    const height = 280;
    const width =1000;

    const svg = d3.select('svg');
    svg.attr("width",width)
    .attr("height",height)

    const margin = { left: 40, top: 25, right: 500, bottom: 20};

    const xScale = d3
      .scaleLinear()
      .domain([
        d3.min(exponentialData, (d) => d.x),
        d3.max(exponentialData, (d) => d.x),
      ])
      .range([margin.left,  width-margin.right]);

    svg
      .append('g')
      .call(d3.axisBottom(xScale))
      .attr('transform', `translate(0,${height - margin.bottom})`);

    const yScale = d3
      .scaleLinear()
      .domain([
        d3.min(exponentialData, (d) => d.y),
        d3.max(exponentialData, (d) => d.y),
      ])
      .range([height - margin.bottom, margin.top])


    svg
      .append('g')
      .call(d3.axisLeft(yScale))
      .attr('transform', `translate(${margin.left},0)`);

    svg
      .selectAll('circle')
      .data(exponentialData)
      .enter()
      .append('circle')
      .attr('cx', (d) => xScale(d.x))
      .attr('cy', (d) => yScale(d.y))
      .attr('r', 5)
      .attr('fill', 'purple');
  }
}
