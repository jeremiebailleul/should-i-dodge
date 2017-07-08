import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sid-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() summoner;

  constructor() { }

  ngOnInit() {
  }

}
