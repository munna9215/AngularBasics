import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { HerosComponent } from './heros/heros.component';

const routes: Routes = [ 
  { path: 'players', component: PlayersComponent },
  { path: 'heros', component: HerosComponent },
  { path: '',   redirectTo: '/players-component', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
