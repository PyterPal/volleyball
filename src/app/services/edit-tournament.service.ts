import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TournamentWithId } from '../model/tournament-with-id';
import { EditTournamentComponent } from '../edit-tournament/edit-tournament.component';

@Injectable()
export class EditTournamentService {
  constructor(private dialog: MatDialog) {}

  open(tournament: TournamentWithId): MatDialogRef<EditTournamentComponent> {
    return this.dialog.open(EditTournamentComponent, {
      data: {
        tournament,
      },
    });
  }
}
