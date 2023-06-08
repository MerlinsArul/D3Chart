import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-linebar',
  templateUrl: './linebar.component.html',
  styleUrls: ['./linebar.component.css']
})
export class LinebarComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
this.barGraph()
}

barGraph(){
  const data = [100, 400, 300, 900, 850, 1000];

    const width = 500;
    const barHeight = 20;
    const margin = 1;

    const scale = d3.scaleLinear()
      .domain([d3.min(data)!, d3.max(data)!])
      .range([50, 500]);

    const svg = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", barHeight * data.length);

    const g = svg.selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", function (d, i) {
        return "translate(0," + i * barHeight + ")";
      });

    g.append("rect")
      .attr("width", function (d) {
        return scale(d)!;
      })
      .attr('fill','yellow')
      .attr("height", barHeight - margin);

    g.append("text")
      .attr("x", function (d) { return scale(d)!; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function (d) { return d; });
  }
}
