import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelService } from '../services/level.service';
import { Level } from '../../models/level.model';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: false,
})
export class QuizComponent implements OnInit {
  currentQuestion!: Level;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private levelService: LevelService
  ) {}

  level!: Level;

  ngOnInit(): void {
    const levelId = +this.route.snapshot.paramMap.get('id')!;
    const level = this.levelService.getLevelById(levelId);

    if (level) {
      this.level = level;
      this.currentQuestion = level;
    } else {
      // Rediriger si le niveau n'existe pas
      alert('Level not found!');
      this.router.navigate(['/world']);
    }
  }

  checkAnswer(answerIndex: number): void {
    const correct = this.currentQuestion.idReponse;
    if (answerIndex === correct) {
      alert('Bonne réponse !');
      this.levelService.validateLevel(this.currentQuestion.num);
      this.levelService.moveToNextLevel();
      this.moveToNextQuestion();
    } else {
      alert('Mauvaise réponse.');
    }
  }

  moveToNextQuestion(): void {
    this.router.navigate(['/world']);
  }
}
