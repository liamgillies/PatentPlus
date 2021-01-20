import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invention-division',
  templateUrl: './invention-division.component.html',
  styleUrls: ['./invention-division.component.scss']
})
export class InventionDivisionComponent implements OnInit {
  divisions: any[] = ["Chemistry", "Mechancial Engineering", 1, 2, 3, 4]

  constructor() { }

  ngOnInit(): void {
  }

  logDivision(divison: any): void {
    console.log(divison)
  }

  

}
