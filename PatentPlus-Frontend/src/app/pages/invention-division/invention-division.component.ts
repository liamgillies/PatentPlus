import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invention-division',
  templateUrl: './invention-division.component.html',
  styleUrls: ['./invention-division.component.scss']
})
export class InventionDivisionComponent implements OnInit {
  divisions: any[] = ["Chemistry", "Chemical Engineering", "Mechanical Engineering", "Computer Science", "Diagnostic Imaging", "Other"];
  selectedDivision: string;

  constructor() { }

  ngOnInit(): void {
  }

  logDivision(divison: any): void {
    console.log(divison)
  }

  selectDivision(division): void {
    this.selectedDivision = division;
  }

  checkSelected(division): Object {
    if (division == this.selectedDivision) {
      return {'background-color': 'lightyellow', 'box-shadow': 'inset 0 0 8px 2px #cccccc'}
    }
    else return {}
  }
  

}
