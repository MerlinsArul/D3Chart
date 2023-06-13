import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
})
export class PiechartComponent implements OnInit {
  ngOnInit() {
    const data = [
      { value: 10, color: '#ff0000' },
      { value: 70, color: '#00ff00' },
      { value: 20, color: '#0000ff' },
    ];

    const width = 200;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const pie= d3.pie<any>().value((d) => d.value)

    const arc = d3.arc<any>()
    .innerRadius(0)
    .outerRadius(radius);

    const svg = d3.select('div#chart-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`);

    const arcs = svg.selectAll('path')
    .data(pie(data))
    .enter()
    .append('path')
    .attr('d',arc)
    .attr('fill', (d) => d.data.color)

    .on('mouseover', (event, d) => {
      d3.select(event.currentTarget)
        .transition()
        .duration(200)
        .attr('opacity', 0.7);
      showTooltip(d.data.value , event);
    })
    .on('mouseout', (event, d) => {
      d3.select(event.currentTarget)
        .transition()
        .duration(200)
        .attr('opacity', 1);
      hideTooltip();
    });

  function showTooltip( value: any , event:any) {
    const tooltip = d3.select('div#tooltip');
    tooltip.html(`<strong>${value}</strong>`)
      .style('left', `${event.pageX}px`)
      .style('top', `${event.pageY}px`)
      .style('opacity', 1);
  }



  function hideTooltip() {
    const tooltip = d3.select('div#tooltip');
    tooltip.style('opacity', 0);
  }

  }
}
