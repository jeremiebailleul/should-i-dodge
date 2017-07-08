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

  displaySearch = true;
  displayResults = false;

  summonerNames;

  loadResultsComponent(summonerNames) {
    this.summonerNames = summonerNames;
    this.displaySearch = false;
    this.displayResults = true;
  }

  newSearch() {
    this.displaySearch = true;
    this.displayResults = false;
    this.summonerNames = [];
  }
}
