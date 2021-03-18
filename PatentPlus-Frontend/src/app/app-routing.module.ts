import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InventionDivisionComponent } from './pages/invention-division/invention-division.component';
import { OtherInventorsComponent } from './pages/other-inventors/other-inventors.component'
import { WelcomeInfoComponent } from './pages/welcome-info/welcome-info.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path: 'other', component: OtherInventorsComponent},
  {path: 'division', component:InventionDivisionComponent},
  {path: 'progressbar', component:ProgressBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
