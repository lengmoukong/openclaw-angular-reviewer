// chart-line.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-chart-line',
  standalone: true,
  imports: [
    NgxEchartsModule,
    NgStyle
  ],
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.less']
})
export class ChartLineComponent implements OnInit {
  @Input() legend: string[] = []; // 图例名称数组
  @Input() xAxisData: string[] = []; // X轴数据
  @Input() seriesData: number[][] = []; // 多条折线的数据（二维数组）
  @Input() colors: string[] = ['#1890ff', '#3068c1', '#6db4bc']; // 折线颜色数组
  @Input() height: string = '100%';

  chartOptions: any;

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    // 构造 series 配置项
    const series = this.legend.map((name, index) => ({
      name,
      type: 'line',
      data: this.seriesData[index] || [],
      smooth: true, // 平滑曲线
      lineStyle: {
        color: this.colors[index] || this.colors[0] // 使用指定颜色或默认颜色
      },
      itemStyle: {
        color: this.colors[index] || this.colors[0]
      }
    }));

    this.chartOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        }
      },
      legend: {
        type: 'plain',
        top: 0,
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        data: this.legend
      },
      grid: {
        right: '3%',
        left: '5%',
        bottom: '12%',
        containLabel: true
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
      series
    };
  }
}