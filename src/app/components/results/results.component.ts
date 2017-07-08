import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RiotApiService } from '../../services/riot-api.service';

@Component({
  selector: 'sid-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() summonerNames;
  @Output() newSearchEvt = new EventEmitter<boolean>();

  summoners = [];

  loading = true;
  resultsFetched = false;

  constructor(private _riotApiService: RiotApiService) { }

  ngOnInit() {
    if (this.summonerNames !== undefined && this.summonerNames.length > 0) {
      this._riotApiService.getSummonerByName(this.summonerNames[0]).subscribe(res => console.log(res));
    }
  }

  newSearch() {
    this.loading = false;
    this.resultsFetched = false;
    this.summoners = [];
    this.newSearchEvt.emit(true);
  }
}
