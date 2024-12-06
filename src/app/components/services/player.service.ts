import { Injectable } from '@angular/core';
import { Player } from '../../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private player: Player = new Player([], 1);

  getPlayer(): Player {
    return this.player;
  }

  validateLevel(): void {
    this.player.numNiveauxPasses.push(this.player.numNiveauActuel);
    this.player.numNiveauActuel++;
  }

  moveToNextLevel(): void {
    this.player.numNiveauActuel++;
  }

  moveToPreviousLevel(): void {
    this.player.numNiveauActuel--;
  }
}
