import { Component, OnInit} from '@angular/core';
import { Player } from '../../../models/player.model';
import { PlayerService } from '../../services/player.service';
import { LevelService } from '../../services/level.service';
import { Level } from '../../../models/level.model';

@Component({
  selector: 'app-player',
  standalone: false,
  
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit {
  player!: Player;
  levels!: Level[];
  positionX!: number;
  positionY!: number;

  constructor(private playerService: PlayerService, private levelService: LevelService) {}

  ngOnInit(): void {
    this.player = this.playerService.getPlayer();
    this.levels = this.levelService.getLevels();
  }

}
 // trop complexe donc à mettre en attente