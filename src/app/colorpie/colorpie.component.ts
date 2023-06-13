import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-colorpie',
  templateUrl: './colorpie.component.html',
  styleUrls: ['./colorpie.component.css']
})
export class ColorpieComponent implements OnInit {
  ngOnInit(): void {
    const data = [
      { label: "Apples", value: 10, color: "#ff0000" },
      { label: "Oranges", value: 15, color: "#00ff00" },
      { label: "Bananas", value: 7, color: "#0000ff" },
      { label: "Grapes", value: 12, color: "#ffff00" },
      { label: "Berries", value: 5, color: "#00ffff" }
    ];

    const width = 400;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const svg = d3.select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d: any) => d.value)])
      .range([chartHeight, 0]);

    const xScale = d3.scaleBand()
      .domain(data.map((d: any) => d.label))
      .range([0, chartWidth])
      .padding(0.1);


    svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d: any) => xScale(d.label)!)
      .attr("y", (d: any) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d: any) => chartHeight - yScale(d.value))
      .attr("fill", (d: any) => d.color);

    svg.append("g")
      .call(d3.axisLeft(yScale));

    svg.append("g")
      .attr("transform", "translate(0," + chartHeight + ")")
      .call(d3.axisBottom(xScale));
  }
}
