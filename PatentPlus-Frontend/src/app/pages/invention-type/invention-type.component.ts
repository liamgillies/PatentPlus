import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invention-type',
  templateUrl: './invention-type.component.html',
  styleUrls: ['./invention-type.component.scss']
})
export class InventionTypeComponent implements OnInit {
  @Input() inventionName: string;
  otherType: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  other(bool) : void  {
    this.otherType = bool;
  }

}
