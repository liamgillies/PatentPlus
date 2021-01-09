import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeInfoComponent } from './pages/welcome-info/welcome-info.component';
import { InventionNameComponent } from './pages/invention-name/invention-name.component';
import { OtherInventorsComponent } from './pages/other-inventors/other-inventors.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeInfoComponent,
    InventionNameComponent,
    OtherInventorsComponent,
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
