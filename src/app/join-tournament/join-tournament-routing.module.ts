import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinTournamentComponent } from './join-tournament.component';

const routes: Routes = [{ path: '', component: JoinTournamentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinTournamentRoutingModule { }
