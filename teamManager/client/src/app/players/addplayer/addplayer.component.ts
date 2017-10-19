import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Player } from './../player'
import { PlayerService } from './../player.service'

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
	new_player : Player 

  constructor(private player_service : PlayerService, private router: Router) { }

  ngOnInit() {
  	this.new_player = new Player 
  }

  create_player(){
    this.player_service.create(this.new_player)
    .then(() => this.router.navigate(['/dashboard']))
    .catch(err => console.log("user error", err))
  }
}
