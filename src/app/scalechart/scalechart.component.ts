import { AfterViewInit, Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-scalechart',
  templateUrl: './scalechart.component.html',
  styleUrls: ['./scalechart.component.css']
})
export class ScalechartComponent implements AfterViewInit {


  ngAfterViewInit(): void {

    const data = [0, 2, 3, 5, 7.5, 9, 10];

    const myScale = d3.scaleLinear()
      .domain([0, 10])
      .range([20, 320])


    const svg = d3.select('svg');
    svg.selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', 5)
      .attr('cy', 10)
      .attr('cx', (d) => myScale(d));

    svg.selectAll('text')
      .data(data)
      .join('text')
      .attr('x',(d) => myScale(d))
      .attr('y', 38)
      .text((d) => d);
  }
}
