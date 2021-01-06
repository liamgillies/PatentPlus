import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeInfoComponent } from './pages/welcome-info/welcome-info.component';
import { InventionNameComponent } from './pages/invention-name/invention-name.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeInfoComponent,
    InventionNameComponent,
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
