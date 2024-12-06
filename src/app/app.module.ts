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
import { PlayerComponent } from './components/world/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorldComponent,
    LevelComponent,
    QuizComponent,
    PlayerComponent
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
