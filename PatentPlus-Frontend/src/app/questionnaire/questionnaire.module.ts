import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [QuestionnaireComponent, QuestionComponent],
  imports: [
    CommonModule
  ]
})
export class QuestionnaireModule { }
