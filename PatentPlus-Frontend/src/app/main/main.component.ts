import { Component, OnInit, ViewChild } from '@angular/core';
import { OtherInventorsComponent } from '../pages/other-inventors/other-inventors.component';
import { WelcomeInfoComponent } from '../pages/welcome-info/welcome-info.component';
import {Inventor} from '../shared/inventor';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  pageNum: number;
  inventor: Inventor;
  otherInventors: boolean;

  @ViewChild(WelcomeInfoComponent)
  private welcomeInfoComponent: WelcomeInfoComponent;

  constructor() { }

  ngOnInit(): void {
    this.pageNum = 1;
  }

  nextPage(): void {
    if (this.pageNum == 1) {
      this.getInventor();
      this.otherInventors = this.welcomeInfoComponent.welcomeInfoForm.controls['otherInventors'].value;
      if (this.otherInventors) {this.pageNum += 1;}
      else {this.pageNum += 2;}
    }
    else {
      this.pageNum += 1;
    }
  }

  prevPage(): void {
    if (this.pageNum == 3){
      if (this.otherInventors==true) {this.pageNum-= 1;}
      else {this.pageNum -= 2;}
    }
    else {
      this.pageNum -= 1;
    }
  }

  getInventor(): void {
    let form = this.welcomeInfoComponent.welcomeInfoForm;
    this.inventor = {
      firstName: form.controls['firstName'].value,
      middleName: form.controls['middleName'].value,
      lastName: form.controls['lastName'].value
    }

  }

}
