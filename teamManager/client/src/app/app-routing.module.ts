import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddplayerComponent } from './players/addplayer/addplayer.component';
import { DashboardComponent } from './players/dashboard/dashboard.component';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './players/status/status.component';



const routes: Routes = [
{
	path: 'addplayer',
	component: AddplayerComponent
},
{
	path: 'dashboard',
	component: DashboardComponent
},
{
	path: 'status',
	component: StatusComponent
},
{
	path: 'status/game/1',
	component: StatusComponent
},
{
	path: 'status/game/2',
	component: StatusComponent
},
{
	path: 'status/game/3',
	component: StatusComponent
},
{
	path: 'players', component: PlayersComponent
},
// {
// 	path: '**', redirectTo: '/addplayer'
// }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
