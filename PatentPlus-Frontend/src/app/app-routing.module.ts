import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherInventorsComponent } from './pages/other-inventors/other-inventors.component'
import { WelcomeInfoComponent } from './pages/welcome-info/welcome-info.component';

const routes: Routes = [
  {path:'', component:WelcomeInfoComponent},
  {path: 'other', component: OtherInventorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
