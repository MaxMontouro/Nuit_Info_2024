import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pour les routes
import { HomeComponent } from './components/base-site/home/home.component';
import { WorldComponent } from './components/world/world.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'world', component: WorldComponent },
  { path: 'quiz/:id', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
