import { Component, OnInit, Input } from '@angular/core';

import { RiotApiService } from '../../services/riot-api.service';

@Component({
  selector: 'sid-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() summonerNames;

  loading = true;
  resultsFetched = false;

  constructor(private _riotApiService: RiotApiService) { }

  ngOnInit() {
    this._riotApiService.getSummonerByName(this.summonerNames[0]).subscribe(res => console.log(res));
  }
}
