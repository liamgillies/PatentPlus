import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Inventor } from '../../shared/inventor';

@Component({
  selector: 'app-other-inventors',
  templateUrl: './other-inventors.component.html',
  styleUrls: ['./other-inventors.component.scss']
})
export class OtherInventorsComponent implements OnInit {

  @Input() inventor: Inventor;
  public inventors = []
  private count = 0;

  inventorsForm = new FormGroup({
    name: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
    this.inventors.push({
      name: this.inventor.firstName + " " + this.inventor.middleName + " " + this.inventor.lastName,
      primary: false,
      id:this.count
    })
    this.count++;
    this.setPrimaryInventor(this.inventors[0])
  }

  addInventor() {
    if(!this.inventorsForm.controls.name.value){
      return;
    }
    this.inventors.push({name: this.inventorsForm.controls.name.value, primary: false, id: this.count})
    this.count++;
    // @ts-ignore
    this.inventorsForm.controls.name.value = '';
  }

  setPrimaryInventor(person) {
    this.inventors.forEach(inventor => {
      if(inventor.id == person.id) {
        inventor.primary = true;
      }
      else {
        inventor.primary = false;
      }
    })
  }

  removeInventor(index): void {
    this.inventors.splice(index, 1);
  }

}
