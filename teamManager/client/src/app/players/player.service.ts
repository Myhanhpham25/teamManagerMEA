import { Injectable } from '@angular/core';
import 'rxjs'

import { Player } from './player'
import { Http } from '@angular/http';


@Injectable()
export class PlayerService {

  constructor(private http: Http) { }

  create(new_player : Player){

  	return this.http.post("/addplayer", new_player).map(data => data.json()).toPromise()
  }

  get_all(){
  	return this.http.get("/get_all_players").map(data => data.json()).toPromise()
  }

  check(){
  	return this.http.get("/check").map(data => data.json()).toPromise()
  }

  destroy(id){
    return this.http.post("/destroy", {id: id}).map(data => data.json()).toPromise()
  }


}
