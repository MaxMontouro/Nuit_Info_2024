import { Injectable } from '@angular/core';
import { Level, LevelStatus } from '../../models/level.model';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root', // Service accessible partout dans l'application
})
export class LevelService {
  private currentLevelId: number = 1; // Niveau actuel du joueur
  constructor(private playerService: PlayerService) {}
  private levels: Level[] = [
    new Level(
      1,
      "Les récifs coralliens",
      "Coucou, c’est nous, les récifs coralliens ! On est super durs et on soutient tout un écosystème marin. Si on était dans ton corps, on serait quoi ?",
      ["Les muscles", "Les os", "Les cheveux", "Les veines"],
      1,
      "blue",
      100,
      100,
      LevelStatus.Unlocked
    ),
    new Level(
      2,
      "Le Gulf Stream",
      "Salut, je suis un courant chaud qui transporte de l’énergie et je régule le climat. Si j’étais dans ton corps, tu me trouverais où ?",
      ["Dans tes artères", "Dans ton estomac", "Dans tes poumons", "Dans ton cerveau"],
      0,
      "gray",
      200,
      100,
      LevelStatus.Locked
    ),
    new Level(
      3,
      "Les mangroves",
      "Hey, moi, je filtre l’eau, je nettoie les polluants, et je protège les côtes des tempêtes. À ton avis, je ressemble à quoi dans ton corps ?",
      ["Tes reins", "Ton foie", "Tes poumons", "Ton cerveau"],
      0,
      "gray",
      300,
      100,
      LevelStatus.Locked
    ),
    new Level(
      4,
      "Le phytoplancton",
      "Salut, on est microscopiques, mais on produit la moitié de l’oxygène que tu respires ! Si on était dans ton corps, on jouerait le rôle de quoi ?",
      ["Les cellules", "Les poumons", "Les muscles", "Les yeux"],
      1,
      "blue",
      400,
      100,
      LevelStatus.Locked
    ),
    new Level(
      5,
      "Les courants marins",
      "Je connecte les océans entre eux, je transporte de l’eau, des nutriments et de la chaleur. Si j’étais dans ton corps, je serais quoi ?",
      ["Le cerveau", "Le système nerveux", "Les veines", "Les artères"],
      2,
      "gray",
      500,
      100,
      LevelStatus.Locked
    ),
    new Level(
      6,
      "Les vagues",
      "C’est nous, les vagues ! On est en mouvement constant grâce au vent. Si on était dans ton corps, qu’est-ce qu’on serait ?",
      ["Les muscles", "Les poumons", "Les artères", "Le système digestif"],
      0,
      "gray",
      600,
      100,
      LevelStatus.Locked
    ),
    new Level(
      7,
      "Les abysses",
      "Coucou, on est les abysses, les profondeurs les plus sombres et mystérieuses de l’océan. Si on était dans ton corps, à quoi on ressemblerait ?",
      ["Ton cerveau", "Ton estomac", "Ton cœur", "Tes os"],
      1,
      "gray",
      700,
      100,
      LevelStatus.Locked
    ),
    new Level(
      8,
      "La bioluminescence",
      "Salut, je suis la lumière magique des profondeurs, j’éclaire là où il fait tout noir. Si j’étais dans ton corps, tu me trouverais où ?",
      ["Dans tes yeux", "Dans tes ongles", "Dans ton foie", "Dans ton cerveau"],
      0,
      "blue",
      800,
      100,
      LevelStatus.Locked
    ),
    new Level(
      9,
      "Les plages de sable",
      "Hey, c’est moi, la plage ! Je protège l’océan des vagues et je retiens plein de trucs. Si j’étais dans ton corps, qu’est-ce que je serais ?",
      ["Tes cheveux", "Ta peau", "Tes ongles", "Ton foie"],
      1,
      "gray",
      900,
      100,
      LevelStatus.Locked
    ),
    new Level(
      10,
      "Les algues géantes (kelp)",
      "Hello, on est les forêts sous-marines qui abritent plein de créatures et protègent les côtes. Si on était dans ton corps, on ressemblerait à quoi ?",
      ["Les cheveux", "Les muscles", "Les veines", "Les os"],
      0,
      "gray",
      1000,
      100,
      LevelStatus.Locked
    ),
    new Level(
      11,
      "Les volcans sous-marins",
      "Je suis un volcan sous l’eau, je libère de l’énergie et crée de nouvelles terres. Si j’étais dans ton corps, je serais quoi ?",
      ["Ton cœur", "Ton foie", "Tes muscles", "Ton estomac"],
      3,
      "gray",
      1100,
      100,
      LevelStatus.Locked
    ),
    new Level(
      12,
      "Les marées",
      "Salut, c’est nous, les marées ! On monte, on descend, et on rythme la vie de l’océan. Si on était dans ton corps, qu’est-ce qu’on serait ?",
      ["Ton cœur", "Ta respiration", "Tes articulations", "Ton système digestif"],
      1,
      "gray",
      1200,
      100,
      LevelStatus.Locked
    )
  ];
  

  getLevels(): Level[] {
    return this.levels;
  }

  getLevelById(id: number): Level | undefined {
    return this.levels.find((level) => level.num === id);
  }

  updateLevel(level: Level): void {
    const index = this.levels.findIndex((l) => l.num === level.num);
    if (index !== -1) {
      this.levels[index] = level;
    }
  }

  // Récupère le niveau actuel
  getCurrentLevel(): Level | undefined {
    return this.levels.find((level) => level.num === this.currentLevelId);
  }

  // Valide un niveau
  validateLevel(levelId: number): void {
    const level = this.levels.find((l) => l.num === levelId);
    if (level && level.status === LevelStatus.Unlocked) {
      level.status = LevelStatus.Validated;
      this.unlockNextLevel(levelId);
      this.playerService.validateLevel();
      level.background = 'green';
    }
  }

  // Passe au niveau suivant
  moveToNextLevel(): boolean {
    const currentLevelIndex = this.levels.findIndex(
      (l) => l.num === this.currentLevelId
    );
    const nextLevel = this.levels[currentLevelIndex + 1];
    if (nextLevel && nextLevel.status === LevelStatus.Unlocked) {
      this.currentLevelId = nextLevel.num;
      this.playerService.moveToNextLevel();
      return true;
    }
    return false;
  }

  // Passe au niveau précédent
  moveToPreviousLevel(): boolean {
    const currentLevelIndex = this.levels.findIndex(
      (l) => l.num === this.currentLevelId
    );
    const previousLevel = this.levels[currentLevelIndex - 1];
    if (previousLevel) {
      this.currentLevelId = previousLevel.num;
      this.playerService.moveToPreviousLevel();
      return true;
    }
    return false;
  }

  // Bascule l'état d'un niveau entre "bloqué" et "débloqué"
  toggleLockLevel(levelId: number): void {
    const level = this.levels.find((l) => l.num === levelId);
    if (level) {
      level.status =
        level.status === LevelStatus.Locked
          ? LevelStatus.Unlocked
          : LevelStatus.Locked;
    }
  }

  // Vérifie si un niveau est accessible
  canAccessLevel(levelId: number): boolean {
    const level = this.levels.find((l) => l.num === levelId);
    if (!level) return false;
    return level.status === LevelStatus.Unlocked || level.status === LevelStatus.Validated;
  }

  // Débloque le niveau suivant après validation du niveau actuel
  private unlockNextLevel(currentLevelId: number): void {
    const nextLevel = this.levels.find((l) => l.num === currentLevelId + 1);
    if (nextLevel && nextLevel.status === LevelStatus.Locked) {
      nextLevel.status = LevelStatus.Unlocked;
      nextLevel.background = 'blue';
    }
  }
}