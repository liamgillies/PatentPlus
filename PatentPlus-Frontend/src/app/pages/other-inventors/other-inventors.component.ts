import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-other-inventors',
  templateUrl: './other-inventors.component.html',
  styleUrls: ['./other-inventors.component.scss']
})
export class OtherInventorsComponent implements OnInit {

  public inventors = []
  private count = 0;

  inventorsForm = new FormGroup({
    name: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
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

}
