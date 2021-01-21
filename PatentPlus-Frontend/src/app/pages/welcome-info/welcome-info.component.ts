import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome-info',
  templateUrl: './welcome-info.component.html',
  styleUrls: ['./welcome-info.component.scss']
})
export class WelcomeInfoComponent implements OnInit {

  welcomeInfoForm: FormGroup;
  nameDisplay: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.welcomeInfoForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: '',
      lastName: ['', [Validators.required]],
      otherInventors: [null, [Validators.required]]

    })
  }

  displayName(): void {
    this.nameDisplay = true;
  }



}
