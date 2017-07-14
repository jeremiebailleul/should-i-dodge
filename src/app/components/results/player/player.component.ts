import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RiotApiService } from '../../../services/riot-api.service';
import { Player } from './player';

@Component({
  selector: 'sid-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() summoner;
  player: Player;
  @Output() loaded = new EventEmitter<boolean>();

  constructor(private _riotApiService: RiotApiService) { }

  ngOnInit() {
    this.player = new Player();
    this.player.accountId = this.summoner.accountId;
    this.player.summonerId = this.summoner.id;
    this.player.name = this.summoner.name;
    this.player.profileIconId = this.summoner.profileIconId;
    this._riotApiService.getProfileIconsVersion().map(res => {
      this.summoner.profileIconUrl = 'http://ddragon.leagueoflegends.com/cdn/'
        + res + '/img/profileicon/'
        + this.player.profileIconId + '.png';
      this.loaded.emit(true);
    }).subscribe(() => {
      this._riotApiService.getLeague(this.player.summonerId)
        .map(x => {
          console.log(x);
          this.getLeagueForSummoner(x);
        })
        .subscribe();
      });
  }

  getLeagueForSummoner(league) {
    for (let l of league) {
      if (l.queue === 'RANKED_SOLO_5x5') {
        this.player.tier = l.tier;
        for (let entry of l.entries) {
          if (entry.playerOrTeamId == this.player.summonerId) {
            this.player.rank = entry.rank;
            this.player.wins = entry.wins;
            this.player.losses = entry.losses;
            this.player.leaguePoints = entry.leaguePoints;
          }
        }
      }
    }
    console.log(this.player);
  }
}
