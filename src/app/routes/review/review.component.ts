import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MRItem {
  id: number;
  title: string;
  author: string;
  project: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
  comments: number;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ReviewComponent implements OnInit {
  activeTab = 'pending';
  
  mrList: MRItem[] = [
    {
      id: 2347,
      title: 'feat: 优化数据库查询性能',
      author: 'lz',
      project: 'openclaw-backend',
      time: '2小时前',
      priority: 'high',
      comments: 5
    },
    {
      id: 2345,
      title: 'fix: 修复登录态过期问题',
      author: 'lz',
      project: 'openclaw-frontend',
      time: '4小时前',
      priority: 'medium',
      comments: 2
    },
    {
      id: 2342,
      title: 'docs: 更新 API 文档',
      author: 'lz',
      project: 'openclaw-docs',
      time: '1天前',
      priority: 'low',
      comments: 0
    }
  ];

  constructor() { }

  ngOnInit() { }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}