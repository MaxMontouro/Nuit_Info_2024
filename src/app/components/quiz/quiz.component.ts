import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: false,

  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  levelId!: number;
  question = 'What is 2 + 2?';
  options = [2, 3, 4, 5];
  correctAnswer = 4;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.levelId = +this.route.snapshot.paramMap.get('id')!;
  }

  checkAnswer(answer: number) {
    if (answer === this.correctAnswer) {
      alert('Correct! Level Complete.');
      this.router.navigate(['/world']);
    } else {
      alert('Wrong answer, try again.');
    }
  }
}
