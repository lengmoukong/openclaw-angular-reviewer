// chart-bar.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-chart-bar',
  standalone: true,
  imports: [
    NgxEchartsModule, // 直接导入模块，无需 forRoot
    NgStyle
  ],
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.less']
})
export class ChartBarComponent implements OnInit {
  @Input() legend: string[] = [];
  @Input() xAxisData: string[] = [];
  @Input() seriesData: number[] = [];
  @Input() color: string = '#1890ff';
  @Input() height: string = '100%';

  chartOptions: any;

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chartOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        // show: true,
        type: "plain",
        top: 0,
        icon: "circle",
        itemWidth: 10,
        itemHeight: 10,
       
      },
      grid: {
        // top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: this.xAxisData,
        axisLabel: {
          // rotate: 45
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: this.legend[0],
          type: 'bar',
          data: this.seriesData,
          barWidth: "25%",
          itemStyle: {
            color: this.color
          }
        }
      ]
    };
  }
}