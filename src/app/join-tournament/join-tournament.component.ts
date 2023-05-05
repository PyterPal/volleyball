import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-join-tournament',
  templateUrl: './join-tournament.component.html',
  styleUrls: ['./join-tournament.component.scss'],
})
export class JoinTournamentComponent {
  joinForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
    teamHome: new FormControl('', [Validators.required]),
    teamAway: new FormControl('', [Validators.required]),
  });
  joinInProgress = false;

  constructor(
    private tournamentService: TournamentService,
    private authService: AuthService,
    private router: Router
  ) {}

  onRegister() {
    if (this.joinForm.invalid) {
      this.joinForm.markAllAsTouched();
    } else {
      this.joinInProgress = true;
      this.authService
        .currentUserEmail()
        .then((email) => {
          if (email) {
            this.tournamentService
              .add({
                date: new Date(this.joinForm.value.date!),
                place: this.joinForm.value.place!,
                organizer: email,
                homeTeam: this.joinForm.value.teamHome!,
                awayTeam: this.joinForm.value.teamAway!,
              })
              .then(() => {
                this.router.navigateByUrl('/');
              })
              .catch((e) => {
                alert('Sikertelen jelentkezés ' + e);
              })
              .finally(() => {
                this.joinInProgress = false;
              });
          }
        })
        .catch((e) => {
          alert(e);
        })
        .finally(() => {
          this.joinInProgress = false;
        });
    }
  }
}
