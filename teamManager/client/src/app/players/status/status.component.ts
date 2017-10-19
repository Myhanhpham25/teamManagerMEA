import { Component, OnInit } from '@angular/core';
import { Player } from "./../player"

import { PlayerService } from './../player.service'
import { Router } from '@angular/router'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
 switch: boolean = true;
  players : Array<Player>

  constructor(private player_service : PlayerService, private router: Router) { }

  ngOnInit() {
  	
  	this.player_service.get_all() 
  	  .then(players => this.players = players)
  	  .catch(err => console.log("All player errors", err))
  }

  set_activity(player, activity){
    player.activity = activity 
   
  }
}
  

