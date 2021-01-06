import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import { HeaderComponent } from './header/header.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


@NgModule({
  declarations: [HeaderComponent, ProgressBarComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    InputTextareaModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FileUploadModule,
    InputTextModule,
    RadioButtonModule,
    ReactiveFormsModule,
    HeaderComponent,
    ProgressBarComponent
  ]
})
export class SharedModule { }
