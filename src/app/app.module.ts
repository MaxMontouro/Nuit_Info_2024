import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/base-site/header/header.component';
import { FooterComponent } from './components/base-site/footer/footer.component';
import { HomeComponent } from './components/base-site/home/home.component';
import { WorldComponent } from './components/world/world.component';
import { LevelComponent } from './components/world/level/level.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CreditsComponent } from './components/credits/credits.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { TCComponent } from './components/tc/tc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorldComponent,
    LevelComponent,
    QuizComponent,
    CreditsComponent,
    PodcastsComponent,
    TCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
