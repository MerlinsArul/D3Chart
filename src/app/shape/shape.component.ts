import { Component, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const data = [
      { shape: 'Circle', value: 30 },
      { shape: 'Rectangle', value: 50 },
      { shape: 'Triangle', value: 20 }
    ];

    const svg = d3.select(this.elementRef.nativeElement).select('.chart')
      .append('svg')
      .attr('width', 400)
      .attr('height', 400);

    const shapes = svg.selectAll('.shape')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'shape')
      .attr('transform', (d, i) => `translate(${i * 100 + 50}, 200)`);

    shapes.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', d => d.value)
      .attr('fill', 'blue');
      
      shapes.append('rect')
      .attr('x', -20)
      .attr('y', d => -d.value / 2)
      .attr('width', 40)
      .attr('height', d => d.value)
      .attr('fill', 'green');

    shapes.append('polygon')
      .attr('points', '-20,0 20,0 0,-40')
      .attr('fill', 'orange');
  }
}
