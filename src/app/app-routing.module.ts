import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pour les routes
import { HomeComponent } from './components/base-site/home/home.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { WorldComponent } from './components/world/world.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TCComponent } from './components/tc/tc.component';
import { CreditsComponent } from './components/credits/credits.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'podcasts', component: PodcastsComponent }, 
  { path: 'world', component: WorldComponent },
  { path: 'credits', component: CreditsComponent},
  { path: 'tc', component: TCComponent},
  { path: 'quiz/:id', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
