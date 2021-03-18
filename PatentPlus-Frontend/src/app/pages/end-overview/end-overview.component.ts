import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-overview',
  templateUrl: './end-overview.component.html',
  styleUrls: ['./end-overview.component.scss']
})
export class EndOverviewComponent implements OnInit {
  @Input() inventionName;
  constructor() { }

  ngOnInit(): void {
  }

}
