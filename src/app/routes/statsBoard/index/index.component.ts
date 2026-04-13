
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
// import { NzChartsModule } from 'ng-zorro-antd/charts';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChartBarComponent } from "../component/chart-bar/chart-bar.component";
import { ChartLineComponent } from "../component/chart-line/chart-line.component";

@Component({
  selector: 'app-index',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    NzTableModule,
    NzRadioModule,
    NzSelectModule,
    NzButtonModule,
    NzTabsModule,
    NzCardModule,
    NzGridModule,
    NzDatePickerModule,
    NzCascaderModule,
    NgIf,
    NgFor,
    NgClass,
    ChartBarComponent,
    ChartLineComponent
  ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class StatsBoardIndexComponent {
  tabsetActive = 0;
  active = 0;
  tabsBox = [
    { name: "品牌影响力", },
    { name: "全网热点舆情分析" },
    { name: "微博传播效果分析" },
    { name: "博文监测" },
    { name: "热控监测" },
    { name: "品牌画像" }
  ];
  barChartObj = {
    name: ['创建任务数（个）'],
    xAxisData: ['营销一部', '营销二部', '营销三部', '营销五部'],
    seriesData: [950, 580, 550, 400]
  }
  barChartObj2 = {
    name: ['平均排队时长（h）'],
    xAxisData: ['营销一部', '营销二部', '营销三部', '营销五部'],
    seriesData: [950, 580, 550, 400]
  }
  // 表格信息
  departmentData = [
    { name: '营销一部', activateNum: '123', consumeCom: '2322441023 ', avgCompletionTime: '3.99', avgRunningTime: '1.4' },
    { name: '营销一部', activateNum: '123', consumeCom: '2322441023 ', avgCompletionTime: '3.99', avgRunningTime: '1.4' },
    { name: '营销一部', activateNum: '123', consumeCom: '2322441023 ', avgCompletionTime: '3.99', avgRunningTime: '1.4' },
    { name: '营销一部', activateNum: '123', consumeCom: '2322441023 ', avgCompletionTime: '3.99', avgRunningTime: '1.4' },
    { name: '营销一部', activateNum: '123', consumeCom: '2322441023 ', avgCompletionTime: '3.99', avgRunningTime: '1.4' },
    { name: '营销一部', activateNum: '123', consumeCom: '2322441023 ', avgCompletionTime: '3.99', avgRunningTime: '1.4' },
    { name: '营销一部', activateNum: '123', consumeCom: '2322441023 ', avgCompletionTime: '3.99', avgRunningTime: '1.4' },

  ];
  overallData = [
    { name: '开通人数总数', num: '123' },
    { name: '开通人数总数', num: '123' },
    { name: '开通人数总数', num: '123' },
    { name: '开通人数总数', num: '123' },
    { name: '开通人数总数', num: '123' },
    { name: '开通人数总数', num: '123' },
  ]
  dateFormat = 'yyyy/MM/dd';

  // 激活的标签页
  activeTab = '品牌影响力';

  // 季报start---------
  listOfOption: Array<{ label: string; value: string }> = [
    { label: '2021Q1', value: '2021Q1' },
    { label: '2021Q2', value: '2021Q2' }
  ];
  multipleValue = [];
  lineChartObj = {
    name: ['营销一部', '营销二部',],
    xAxisData: ['第一季度', '第二季度', '第三季度', '第四季度'],
    seriesData: [
      [950, 580, 550, 400],
      [550, 380, 250, 100]
    ]
  }
  lineChartObj2 = {
    name: ['营销一部', '营销二部',],
    xAxisData: ['第一季度', '第二季度', '第三季度', '第四季度'],
    seriesData: [
      [950, 580, 550, 400],
      [550, 380, 250, 100]
    ]
  }
  values: string[] | null = null;
  filterOptions = [
    {
      value: '2024',
      label: '2024',
      children: [
        {
          value: '1',
          label: '第一季度',
          isLeaf: true
        },
        {
          value: '2',
          label: '第二季度',
          isLeaf: true
        },
        {
          value: '3',
          label: '第三季度',
          isLeaf: true
        },
        {
          value: '4',
          label: '第四季度',
          isLeaf: true
        },
      ]
    }
  ];
  wholeTableData = [
    { name: '失败任务数（个）', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
    { name: '总任务数（个）', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
    { name: '失败率', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
  ]
  brandInfluence = [
    { name: '失败任务数（个）', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
    { name: '总任务数（个）', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
    { name: '失败率', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
  ]
  hotspotTableData = [
    { name: '失败任务数（个）', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
    { name: '总任务数（个）', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
    { name: '失败率', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
  ]
  wbTableData = [
    { name: '失败任务数（个）', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
    { name: '总任务数（个）', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
    { name: '失败率', nowNum: '123', lastSomeNum: '2322441023 ', monthNum: '3.99', lastNum: '1.4', yearNum: 1 },
  ]
  // 季报end-----------
  onTabsChange(event:any) {
    console.log(event);
    this.tabsetActive = event.index;
  }
  onTabsBoxChange(i: any) {
    this.active = i;
  }
  // 季报----start
  onFilterChanges(value: string[]) {
    console.log(value);
  }
}