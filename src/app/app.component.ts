import { Component } from '@angular/core';

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

  loadSearchComponent() {
    this.displaySearch = true;
  }

  loadResultsComponent(summonerNames) {
    this.summonerNames = summonerNames;
    this.displaySearch = false;
    this.displayResults = true;
    console.log(this.summonerNames);
  }
}
