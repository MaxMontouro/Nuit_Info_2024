import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Level } from '../../models/level.model';
import { LevelService } from '../services/level.service';

@Component({
  selector: 'app-quiz',
  standalone: false,

  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  level!: Level;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private levelService: LevelService
  ) {}

  ngOnInit() {
    const levelId = +this.route.snapshot.paramMap.get('id')!;
    const level = this.levelService.getLevelById(levelId);

    if (level) {
      this.level = level;
    } else {
      // Rediriger si le niveau n'existe pas
      alert('Level not found!');
      this.router.navigate(['/world']);
    }
  }

  checkAnswer(answer: string) {
    if (answer === this.level.reponses[this.level.idReponse]) {
      alert('Correct! Level Complete.');
      this.levelService.validateLevel(this.level.num);
      this.levelService.moveToNextLevel();
      this.router.navigate(['/world']);
    } else {
      alert('Wrong answer, try again.');
    }
  }
}
