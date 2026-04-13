import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  standalone: true,
  imports: [RouterOutlet]
})
export class LayoutDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
