import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament.component';
import { ListTournamentModule } from '../list-tournament/list-tournament.module';
import { EditTournamentService } from '../services/edit-tournament.service';
import { EditTournamentModule } from '../edit-tournament/edit-tournament.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [TournamentComponent],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    MatCardModule,
    MatDialogModule,
    ListTournamentModule,
    EditTournamentModule,
  ],
  providers: [EditTournamentService],
})
export class TournamentModule {}
