import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() currentPageNum: number;
  @Input() totalPageNum: number;
  filledWidth: number;
  constructor() { }

  ngOnInit(): void {
  }

  getWidth(input: String): Object {
      this.filledWidth = this.currentPageNum / this.totalPageNum;

      if (input == 'filled') {
        let filledWidth100 = this.filledWidth * 100;
        if (filledWidth100 == 100){
          return {'width': '100%', 'border-radius': '50px' }
        }
        else {
          return {'width': filledWidth100.toString() + '%'}
        }
        
      }
      else if (input == 'empty') {
        let emptyWidth = 1 - this.filledWidth;
        emptyWidth *= 100; 
        return {'width': emptyWidth.toString() + '%'}
      }
    }
  
    test(): void {
      this.currentPageNum += 1;
    }

}
