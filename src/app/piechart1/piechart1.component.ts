import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-piechart1',
  templateUrl: './piechart1.component.html',
  styleUrls: ['./piechart1.component.css']
})
export class Piechart1Component implements OnInit {
  ngOnInit(): void {
    const data:any[] = [
      { "category": "Category 1", "value": 30, "color": "#98abc5" },
      { "category": "Category 2", "value": 50, "color": "#8a89a6" },
      { "category": "Category 3", "value": 20, "color": "#7b6888" }
    ];

    const width = 200;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal<string>()
      .domain(data.map(d => d.category))
      .range(data.map(d => d.color));

    const pie = d3.pie<any>()
      .value(d => d.value)
      .sort(null);
      
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
      .attr('d', arc)
      .attr('fill', d => color(d.data.category))
      .on('mouseover', (event, d) => {
        d3.select(event.currentTarget)
          .transition()
          .duration(200)
          .attr('opacity', 0.7);
        showTooltip(d.data.category, d.data.value , event);
      })
      .on('mouseout', (event, d) => {
        d3.select(event.currentTarget)
          .transition()
          .duration(200)
          .attr('opacity', 1);
        hideTooltip();
      });

    function showTooltip(category: any, value: any , event:any) {
      const tooltip = d3.select('div#tooltip');
      tooltip.html(`<strong>${category}</strong>: ${value}`)
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
