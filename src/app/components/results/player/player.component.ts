import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RiotApiService } from '../../../services/riot-api.service';

@Component({
  selector: 'sid-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() summoner;
  @Output() loaded = new EventEmitter<boolean>();

  constructor(private _riotApiService: RiotApiService) { }

  ngOnInit() {
    console.log(this.summoner);
    this._riotApiService.getProfileIconsVersion().subscribe(res => {
      this.summoner.profileIconUrl = 'http://ddragon.leagueoflegends.com/cdn/'
        + res + '/img/profileicon/'
        + this.summoner.profileIconId + '.png';
      this.loaded.emit(true);
    });
  }
}
