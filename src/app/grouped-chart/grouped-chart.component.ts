import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-grouped-chart',
  templateUrl: './grouped-chart.component.html',
  styleUrls: ['./grouped-chart.component.css'],
})
export class GroupedChartComponent implements OnInit {
  ngOnInit() {
    const data = {
      labels: ['A', 'B', 'C','D'],
      series: [
        {
          label: 'HTC',
          values: [14, 8, 15,25],
          color: '#16A085',
          },
        {
          label: 'CTS',
          values: [12, 43, 22,36],
          color: '#33435C',
        },
        {
          label: 'HCL',
          values: [56,34,26,16],
          color: '#0000FF',
        },
      ],
    };

    const chartWidth = 300;
    const barHeight = 40;
    const groupHeight = barHeight * data.series.length;
    const gapBetweenGroups = 10;
    const spaceForLabels = 150;
    const spaceForLegend = 150;

    const zippedData = [];
    for (let i = 0; i < data.labels.length; i++) {
      for (let j = 0; j < data.series.length; j++) {
        zippedData.push(data.series[j].values[i]);
      }
    }

    // const color = d3.scaleOrdinal().range(['#16A085', '#33435C','#0000FF']);


    const chartHeight =
      barHeight * zippedData.length + gapBetweenGroups * data.labels.length;

    const x = d3
      .scaleLinear()
      .domain([0, Math.max(...zippedData)])
      .range([0, chartWidth]);

    const y = d3.scaleLinear().range([chartHeight + gapBetweenGroups, 0]);

    const yAxis = d3.axisLeft(y);
    yAxis.tickFormat();
    yAxis.tickSize(0);

    const tickFormat = d3.format('');
    const xAxis = d3.axisBottom(x).tickFormat(tickFormat);

    const chart = d3
      .select('.chart')
      .attr('width', spaceForLabels + chartWidth + spaceForLegend)
      .attr('height', chartHeight + 30);

    // const setColor = (d: any): any => {
    //   return color(d);
    // };

    const setColor = (d: any): any => {
      for (const series of data.series) {
        const index = series.values.indexOf(d);
        if (index !== -1) {
          return series.color;
        }
      }
    };
    // const setColor = (d: any): any => {
    //   const seriesIndex = Math.floor(d / data.labels.length);
    //   return data.series[seriesIndex].color;
    // };



    const bar = chart
      .selectAll('g')
      .data(zippedData)
      .enter()
      .append('g')
      .attr('transform', function (d, i) {
        return (
          'translate(' +
          spaceForLabels +
          ',' +
          (i * barHeight +
            gapBetweenGroups * (0.5 + Math.floor(i / data.series.length))) +
          ')'
        );
      });

    bar
      .append('rect')
      .attr('fill', setColor)
      .attr('class', 'bar')
      .attr('width', x)
      .attr('height', barHeight - 1);

    bar
      .append('text')
      .attr('class', 'label')
      .attr('x', function (d) {
        return -30;
      })
      .attr('y', groupHeight / 2)
      .attr('dy', '.35em')
      .text(function (d, i) {
        if (i % data.series.length === 0)
          return data.labels[Math.floor(i / data.series.length)];
        else return '';
      });

    chart
      .append('g')
      .attr('class', 'y axis')
      .attr(
        'transform',
        'translate(' + spaceForLabels + ', ' + -gapBetweenGroups / 2 + ')'
      )
      .call(yAxis);

    chart
      .append('g')
      .attr('class', 'x axis')
      .attr(
        'transform',
        'translate(' + spaceForLabels + ',' + chartHeight + ')'
      )
      .call(xAxis);

    const legendRectSize = 18;
    const legendSpacing = 4;

    const legend = chart
      .selectAll('.legend')
      .data(data.series)
      .enter()
      .append('g')
      .attr('transform', function (d, i) {
        const height = legendRectSize + legendSpacing;
        const offset = -gapBetweenGroups / 2;
        const horz = spaceForLabels + chartWidth + 40 - legendRectSize;
        const vert = i * height - offset;
        return 'translate(' + horz + ',' + vert + ')';
      });

    legend
      .append('rect')
      .attr('width', legendRectSize)
      .attr('height', legendRectSize)
      .style('fill', (d: any) => d.color)
      .style('stroke',(d: any) => d.color);

    legend
      .append('text')
      .attr('class', 'legend')
      .attr('x', legendRectSize + legendSpacing)
      .attr('y', legendRectSize - legendSpacing)
      .text(function (d) {
        return d.label;
      });
  }
}
