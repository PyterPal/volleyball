import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.component.html',
  styleUrls: ['./edit-tournament.component.scss'],
})
export class EditTournamentComponent {
  editForm = new FormGroup({
    date: new FormControl(
      new Date(this.data.tournament.tournament.date.seconds * 1000),
      [Validators.required]
    ),
    place: new FormControl(this.data.tournament.tournament.place, [
      Validators.required,
    ]),
    teamHome: new FormControl(this.data.tournament.tournament.homeTeam, [
      Validators.required,
    ]),
    teamAway: new FormControl(this.data.tournament.tournament.awayTeam, [
      Validators.required,
    ]),
  });
  editInProgress = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<EditTournamentComponent>,
    private tournamentService: TournamentService
  ) {}

  onEdit() {
    if (this.editForm.valid) {
      console.log(this.editForm.value);
      this.tournamentService
        .update(this.data.tournament.id, {
          date: new Date(this.editForm.value.date!),
          place: this.editForm.value.place!,
          organizer: this.data.tournament.tournament.organizer,
          homeTeam: this.editForm.value.teamHome!,
          awayTeam: this.editForm.value.teamAway!,
        })
        .then(() => {
          this.matDialogRef.close();
        });
    }
  }

  onDelete() {
    this.tournamentService.delete(this.data.tournament.id).then(() => {
      this.matDialogRef.close();
    });
  }
}
