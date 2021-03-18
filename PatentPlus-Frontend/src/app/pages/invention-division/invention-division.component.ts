import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invention-division',
  templateUrl: './invention-division.component.html',
  styleUrls: ['./invention-division.component.scss']
})
export class InventionDivisionComponent implements OnInit {
  divisions: any[] = ["Chemistry", "ChemicalEngineering", "MechanicalEngineering", "ComputerScience", "DiagnosticImaging", "Other"];
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
      return {'background-color': 'yellow'}
    }
    else return {}
  }
  

}
