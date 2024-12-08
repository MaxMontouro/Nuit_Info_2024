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
import { IntroComponent } from './components/intro/intro.component';
import { FinComponent } from './components/fin/fin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorldComponent,
    LevelComponent,
    QuizComponent,
    IntroComponent,
    FinComponent
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
