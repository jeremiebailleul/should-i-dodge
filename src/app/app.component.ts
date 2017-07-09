import { Component, ViewChild, ComponentRef} from '@angular/core';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'sid-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Should I Dodge';
  slogan = 'See if you\'d better dodge the game based on your teammates information !';

  loadedPlayers = 0;
  displayTitleBar = true;
  displaySearch = true;
  displayResults = false;

  summonerNames = [];

  loadResultsComponent(summonerNames) {
    this.summonerNames = summonerNames;
    this.displayTitleBar = false;
    this.displaySearch = false;
    this.displayResults = true;
  }

  newSearch() {
    this.loadedPlayers = 0;
    this.displayTitleBar = true;
    this.displaySearch = true;
    this.displayResults = false;
    this.summonerNames = [];
  }
}
