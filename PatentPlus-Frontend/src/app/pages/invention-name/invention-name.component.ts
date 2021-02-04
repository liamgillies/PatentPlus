import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invention-name',
  templateUrl: './invention-name.component.html',
  styleUrls: ['./invention-name.component.scss']
})
export class InventionNameComponent implements OnInit {

  @Input() inventorname;

  inventionNameForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.inventionNameForm = this.fb.group({
      inventionName: ['', [Validators.required]]
    })
  }

 

  



}
