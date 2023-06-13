import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-coloredchart',
  templateUrl: './coloredchart.component.html',
  styleUrls: ['./coloredchart.component.css']
})
export class ColoredchartComponent  implements OnInit{
  ngOnInit(): void {
    const jsonData = [
      { "value": 10, "color": "#ff0000" },
      { "value": 20, "color": "#00ff00" },
      { "value": 30, "color": "#0000ff" },
      { "value": 40, "color": "#ffff00" },
      { "value": 50, "color": "#00ffff" }
    ];

    const values = jsonData.map((d) => d.value);
    const [minValue, maxValue] = d3.extent(values) as [number, number];

    const colorScale = d3.scaleOrdinal()
    .domain([minValue.toString(), maxValue.toString()])
      .range(jsonData.map((d) => d.color));

      const setColor = (d: any): any => {
        return colorScale(d);
      };

    d3.select("svg")
      .selectAll("rect")
      .data(jsonData)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 50)
      .attr("y", 50)
      .attr("width", 40)
      .attr("height", 20)
      .style("fill",setColor);
  }

}
