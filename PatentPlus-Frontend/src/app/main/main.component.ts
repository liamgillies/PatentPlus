import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  pageNum: number;

  constructor() { }

  ngOnInit(): void {
    this.pageNum = 1;
  }

  nextPage(): void {
    this.pageNum += 1;
  }

  prevPage(): void {
    this.pageNum -= 1;
  }

}
