import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeInfoComponent } from './pages/welcome-info/welcome-info.component';
import { InventionNameComponent } from './pages/invention-name/invention-name.component';
import { OtherInventorsComponent } from './pages/other-inventors/other-inventors.component';
import { InventionDivisionComponent } from './pages/invention-division/invention-division.component';
import { EndOverviewComponent } from './pages/end-overview/end-overview.component';
import { MainComponent } from './main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeInfoComponent,
    InventionNameComponent,
    OtherInventorsComponent,
    InventionDivisionComponent,
    EndOverviewComponent,
    MainComponent,
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
