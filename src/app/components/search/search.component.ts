import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sid-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  instructions = 'Paste your champion selection chat in the area below :';
  placeholder = 'SKT T1 Huni joined the lobby\nSKT T1 Peanut joined the lobby\nSKT T1 Faker joined the lobby\n' +
    'SKT T1 Bang joined the lobby\nSKT T1 Wolf joined the lobby';

  champselectChat = 'Pîcsou joined the lobby\nmontanamus joined the lobby\nYou may invite players to this game.\n' +
    'cmeliak2323 joined the lobby\ndishesdrummer joined the lobby\niRayoWTF joined the lobby';

  summonerNames: string[];

  @Output() loadResults = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.parseRequestContent();
    this.loadResults.emit(this.summonerNames);
  }

  parseRequestContent() {
    const summonerNames: string[] = [];

    if (this.champselectChat === undefined) {
      return;
    }

    const lines: string[] = this.champselectChat.split('\n');
    for (let i = 0; i < lines.length; i++) {

      if (lines[i].search('joined the lobby') === -1) {
        continue;
      }
      if (lines[i] !== '') {
        summonerNames.push(lines[i].replace(' joined the lobby', ''));
      }
    }
    this.summonerNames = summonerNames.sort();
  }

}
