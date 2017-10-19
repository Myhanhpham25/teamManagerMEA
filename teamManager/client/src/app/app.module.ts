import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { AddplayerComponent } from './players/addplayer/addplayer.component';
import { DashboardComponent } from './players/dashboard/dashboard.component';
import { PlayerService } from './players/player.service';
import { StatusComponent } from './players/status/status.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    AddplayerComponent,
    DashboardComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
   
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
