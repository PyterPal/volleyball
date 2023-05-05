import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { TournamentWithId } from '../model/tournament-with-id';
import { AuthService } from '../services/auth.service';
import { EditTournamentService } from '../services/edit-tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit {
  isLoggedIn$ = this.authService.isLoggedIn();
  tournaments!: TournamentWithId[];
  displayedColumns: string[] = ['date', 'place', 'homeTeam', 'awayTeam'];
  userTournaments!: TournamentWithId[];
  upcomingTournament!: TournamentWithId[];

  constructor(
    private tournamentService: TournamentService,
    private authService: AuthService,
    private editTournamentService: EditTournamentService
  ) {}

  ngOnInit() {
    this.tournamentService.getAll().subscribe((tournaments) => {
      this.tournaments = tournaments;
    });

    this.authService.currentUserEmail().then((email) => {
      if (email) {
        this.tournamentService.getByEmail(email).subscribe((tournaments) => {
          this.userTournaments = tournaments;
        });
      }
    });

    this.tournamentService.getUpcoming().subscribe((tournament) => {
      this.upcomingTournament = tournament;
    });
  }

  editTournament(tournament: TournamentWithId) {
    this.editTournamentService.open(tournament);
  }
}
