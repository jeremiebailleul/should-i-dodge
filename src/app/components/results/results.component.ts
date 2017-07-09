import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RiotApiService } from '../../services/riot-api.service';
import {Observable} from 'rxjs/Observable';

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
  resultsFetched = 0;

  constructor(private _riotApiService: RiotApiService) { }

  ngOnInit() {
    if (this.summonerNames) {
      this.summonerNames
        .forEach(summonerName => this._riotApiService.getSummonerByName(summonerName)
        .subscribe(res => {
          this.summoners.push(res);
        }));
    }
  }

  reset() {
    this.loading = false;
    this.resultsFetched = 0;
    this.summoners = [];
    this.newSearchEvt.emit(true);
  }
}
