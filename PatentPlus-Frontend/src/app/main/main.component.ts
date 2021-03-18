import { Component, OnInit, ViewChild } from '@angular/core';
import { InventionNameComponent } from '../pages/invention-name/invention-name.component';
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
  inventionName: string;
  progressBarCurrent: number;
  progressBarTotal: number;

  @ViewChild(WelcomeInfoComponent)
  private welcomeInfoComponent: WelcomeInfoComponent;
  @ViewChild(InventionNameComponent)
  private inventionNameComponent: InventionNameComponent;

  constructor() { }

  ngOnInit(): void {
    this.pageNum = 1;
    this.progressBarCurrent = 1;
    this.progressBarTotal = 4;
  }

  nextPage(): void {
    this.incrementProgressBar();
    switch (this.pageNum) {
      case 1:
        this.getInventor();
        this.otherInventors = this.welcomeInfoComponent.welcomeInfoForm.controls['otherInventors'].value;
        if (!this.otherInventors) {this.pageNum += 1;}
        break;
        
      case 3:
        this.inventionName = this.inventionNameComponent.inventionNameForm.controls['inventionName'].value;
        break;
    }
    this.pageNum += 1;
    
  }

  prevPage(): void {
    this.decrementProgressBar();
    if (this.pageNum == 3){
      if (!this.otherInventors) {this.pageNum-= 1;}
    }
    this.pageNum -= 1;
    
  }

  getInventor(): void {
    let form = this.welcomeInfoComponent.welcomeInfoForm;
    this.inventor = {
      firstName: form.controls['firstName'].value,
      middleName: form.controls['middleName'].value,
      lastName: form.controls['lastName'].value
    }

  }

  incrementProgressBar(): void {
    switch (this.pageNum) {
      case 1: 
        this.otherInventors = this.welcomeInfoComponent.welcomeInfoForm.controls['otherInventors'].value;
        this.progressBarCurrent += this.otherInventors ? 1 : 2;
        break;
      
      case 4:
        this.progressBarCurrent = 1;
        this.progressBarTotal = 3;
        break;

      default: 
        this.progressBarCurrent += 1;
        break;

      

    }

  }

  decrementProgressBar(): void {
    switch (this.pageNum) {
      case 3: 
        this.progressBarCurrent -= this.otherInventors ? 1 : 2;
        break;
      
      case 5:
        this.progressBarCurrent = 4;
        this.progressBarTotal = 4;
        break;

      default: 
        this.progressBarCurrent -= 1;
        break;
    }
  }

}
