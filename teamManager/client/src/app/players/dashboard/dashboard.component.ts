import { Component, OnInit } from '@angular/core';

import { Player } from "./../player"

import { PlayerService } from './../player.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	players : Array<Player>

  constructor(private player_service : PlayerService, private router: Router) { }

  ngOnInit() {

  	// this.player_service.check()
  	// 	.then(player => console.log(player))
  	// 	.catch(() => this.router.navigate(["/addplayer"]))
  	
  	this.player_service.get_all() 
  	 // .then(() => console.log("this works", this.players))
  	  .then(players => this.players = players)
  	  .catch(err => console.log("All player errors", err))
  }

    destroy(id){    
      this.player_service.destroy(id)
      .then(() => 
        this.player_service.get_all() 
        .then(players => this.players = players) 
        .catch(err => console.log("All player errors", err)))
      .catch(err => console.log("Error", err))
  }
}
