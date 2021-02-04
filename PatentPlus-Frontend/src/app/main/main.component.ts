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

  @ViewChild(WelcomeInfoComponent)
  private welcomeInfoComponent: WelcomeInfoComponent;
  @ViewChild(InventionNameComponent)
  private inventionNameComponent: InventionNameComponent;

  constructor() { }

  ngOnInit(): void {
    this.pageNum = 6;
  }

  nextPage(): void {
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

}
