import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-grouped-chart1',
  templateUrl: './grouped-chart1.component.html',
  styleUrls: ['./grouped-chart1.component.css']
})
export class GroupedChart1Component implements OnInit{
  ngOnInit(): void {
    const data = [
      {
        "group": "Group A",
        "values": [
          { "category": "Category 1", "value": 10, "color": "#98abc5" },
          { "category": "Category 2", "value": 20, "color": "#8a89a6" },
          { "category": "Category 3", "value": 15, "color": "#7b6888" }
        ]
      },
      {
        "group": "Group B",
        "values": [
          { "category": "Category 1", "value": 15, "color": "#ff0000" },
          { "category": "Category 2", "value": 25, "color": "#00ff00" },
          { "category": "Category 3", "value": 12, "color": "#0000ff" }
        ]
      }
    ];
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;



    const svg = d3
    .select('div#chart-container')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x0 = d3.scaleBand().rangeRound([0, width]).paddingInner(0.1);
  const x1 = d3.scaleBand().padding(0.05);
  const y = d3.scaleLinear().rangeRound([height, 0]);

  const color = d3.scaleOrdinal()
    .range(data.flatMap(d => d.values.map(v => v.color)));

  x0.domain(data.map(d => d.group));
  x1.domain(data[0].values.map(d => d.category)).rangeRound([0, x0.bandwidth()]);

const values: number[] = data.flatMap(d => d.values.map(v => Number(v.value)));
const yMax: number = d3.max(values) as number;
y.domain([0, yMax]);
 

  svg.append('g')
    .selectAll('g')
    .data(data)
    .join('g')
    .attr('transform', d => `translate(${x0(d.group)},0)`)
    .selectAll('rect')
    .data(d => d.values)
    .join('rect')
    .attr('x', d => x1(d.category)!)
    .attr('y', d => y(d.value))
    .attr('width', x1.bandwidth())
    .attr('height', d => height - y(d.value))
    .attr('fill', d => d.color);

  svg.append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x0));

  svg.append('g')
    .attr('class', 'y-axis')
    .call(d3.axisLeft(y));
}
  }

