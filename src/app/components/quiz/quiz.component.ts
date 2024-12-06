/*
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
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelService } from '../services/level.service';
import { Level } from '../../models/level.model';
/*
interface QuizData {
  speaker: string;
  question: string;
  answers: string[];
  correct: number;
  explication: string;
}*/

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: false,
})
export class QuizComponent implements OnInit {
  /*quizData: QuizData[] = [
    {
      speaker: "Les récifs coralliens",
      question:
        "Coucou, c’est nous, les récifs coralliens ! On est super durs et on soutient tout un écosystème marin. Si on était dans ton corps, on serait quoi ?",
      answers: ["Les muscles", "Les os", "Les cheveux", "Les veines"],
      correct: 1,
      explication:
        "Les récifs coralliens agissent comme un squelette sous-marin qui soutient la vie marine, tout comme les os soutiennent le corps humain.",
    },
    {
      speaker: "Le Gulf Stream",
      question: "Salut, je suis un courant chaud qui transporte de l’énergie et je régule le climat. Si j’étais dans ton corps, tu me trouverais où ?",
      answers: ["Dans tes artères", "Dans ton estomac", "Dans tes poumons", "Dans ton cerveau"],
      correct: 0,
      explication: "Le Gulf Stream transporte la chaleur et l'énergie dans l'océan, comme les artères transportent le sang oxygéné dans ton corps."
    },
    {
        speaker: "Les mangroves",
        question: "Hey, moi, je filtre l’eau, je nettoie les polluants, et je protège les côtes des tempêtes. À ton avis, je ressemble à quoi dans ton corps ?",
        answers: ["Tes reins", "Ton foie", "Tes poumons", "Ton cerveau"],
        correct: 0,
        explication: "Les mangroves filtrent l’eau et retiennent les polluants, tout comme les reins nettoient le sang dans ton corps."
    },
    {
        speaker: "Le phytoplancton",
        question: "Salut, on est microscopiques, mais on produit la moitié de l’oxygène que tu respires ! Si on était dans ton corps, on jouerait le rôle de quoi ?",
        answers: ["Les cellules", "Les poumons", "Les muscles", "Les yeux"],
        correct: 1,
        explication: "Le phytoplancton produit une grande quantité d’oxygène, tout comme tes poumons le font pour ton corps."
    },
    {
        speaker: "Les courants marins",
        question: "Je connecte les océans entre eux, je transporte de l’eau, des nutriments et de la chaleur. Si j’étais dans ton corps, je serais quoi ?",
        answers: ["Le cerveau", "Le système nerveux", "Les veines", "Les artères"],
        correct: 2,
        explication: "Les courants marins transportent l’eau et les nutriments dans les océans, tout comme les veines transportent le sang et les nutriments dans ton corps."
    },
    {
        speaker: "Les vagues",
        question: "C’est nous, les vagues ! On est en mouvement constant grâce au vent. Si on était dans ton corps, qu’est-ce qu’on serait ?",
        answers: ["Les muscles", "Les poumons", "Les artères", "Le système digestif"],
        correct: 0,
        explication: "Les vagues bougent grâce à l’énergie du vent, tout comme les muscles permettent à ton corps de se mouvoir."
    },
    {
        speaker: "Les abysses",
        question: "Coucou, on est les abysses, les profondeurs les plus sombres et mystérieuses de l’océan. Si on était dans ton corps, à quoi on ressemblerait ?",
        answers: ["Ton cerveau", "Ton estomac", "Ton cœur", "Tes os"],
        correct: 1,
        explication: "Les abysses décomposent les matières organiques, tout comme l’estomac digère les aliments pour en tirer de l’énergie."
    },
    {
        speaker: "La bioluminescence",
        question: "Salut, je suis la lumière magique des profondeurs, j’éclaire là où il fait tout noir. Si j’étais dans ton corps, tu me trouverais où ?",
        answers: ["Dans tes yeux", "Dans tes ongles", "Dans ton foie", "Dans ton cerveau"],
        correct: 0,
        explication: "La bioluminescence éclaire les zones sombres de l’océan, comme les yeux éclairent ta vision du monde."
    },
    {
        speaker: "Les plages de sable",
        question: "Hey, c’est moi, la plage ! Je protège l’océan des vagues et je retiens plein de trucs. Si j’étais dans ton corps, qu’est-ce que je serais ?",
        answers: ["Tes cheveux", "Ta peau", "Tes ongles", "Ton foie"],
        correct: 1,
        explication: "La plage agit comme une barrière protectrice pour l’océan, tout comme la peau protège ton corps des agressions extérieures."
    },
    {
        speaker: "Les algues géantes (kelp)",
        question: "Hello, on est les forêts sous-marines qui abritent plein de créatures et protègent les côtes. Si on était dans ton corps, on ressemblerait à quoi ?",
        answers: ["Les cheveux", "Les muscles", "Les veines", "Les os"],
        correct: 0,
        explication: "Les algues géantes forment des barrières naturelles et attrapent les particules dans l’eau, comme les cheveux protègent la tête et capturent la poussière."
    },
    {
        speaker: "Les volcans sous-marins",
        question: "Je suis un volcan sous l’eau, je libère de l’énergie et crée de nouvelles terres. Si j’étais dans ton corps, je serais quoi ?",
        answers: ["Ton cœur", "Ton foie", "Tes muscles", "Ton estomac"],
        correct: 3,
        explication: "Les volcans sous-marins transforment la matière en énergie, tout comme ton estomac digère les aliments pour alimenter ton corps."
    },
    {
        speaker: "Les marées",
        question: "Salut, c’est nous, les marées ! On monte, on descend, et on rythme la vie de l’océan. Si on était dans ton corps, qu’est-ce qu’on serait ?",
        answers: ["Ton cœur", "Ta respiration", "Tes articulations", "Ton système digestif"],
        correct: 1,
        explication: "Les marées, avec leur mouvement régulier, rappellent le rythme de la respiration qui inspire et expire l’air dans ton corps."
    }
  ];*/

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
      this.moveToNextQuestion();
    } else {
      alert('Mauvaise réponse.');
    }
  }

  moveToNextQuestion(): void {
    this.router.navigate(['/world']);
    /*
    let indexSuiv = this.currentQuestion.num;
    if (indexSuiv < this.levelService.getLevels().length) {
      this.router.navigate(['/quiz/:indexSuiv']);
    } else {
      alert('Quiz terminé !');
      this.router.navigate(['/world']);
    }
    */
  }
}
