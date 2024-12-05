import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pour les routes
import { HomeComponent } from './components/base-site/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
