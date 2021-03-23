import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invention-type',
  templateUrl: './invention-type.component.html',
  styleUrls: ['./invention-type.component.scss']
})
export class InventionTypeComponent implements OnInit {
  @Input() inventionName: string;
  selectedType: string;
  constructor() { }

  ngOnInit(): void {
  }

  selectType(input): void {
    this.selectedType = input;
  }

  selected(input): Object {
    if (this.selectedType==input) {
      return {'background-color': 'lightyellow', 'box-shadow': 'inset 0 0 8px 2px #cccccc'};
    }
    else return {}
  }

}
