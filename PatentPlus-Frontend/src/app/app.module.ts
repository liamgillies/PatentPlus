import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { WelcomeInfoComponent } from './welcome-info/welcome-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
