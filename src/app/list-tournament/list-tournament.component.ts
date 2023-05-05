import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TournamentWithId } from '../model/tournament-with-id';

@Component({
  selector: 'app-list-tournament',
  templateUrl: './list-tournament.component.html',
  styleUrls: ['./list-tournament.component.scss'],
})
export class ListTournamentComponent {
  @Input() tournaments!: TournamentWithId[];
  @Input() hover = false;
  @Output() selectedTournament = new EventEmitter<TournamentWithId>();
  displayedColumns: string[] = ['date', 'place', 'homeTeam', 'awayTeam'];

  emitTournament(row: TournamentWithId) {
    this.selectedTournament.emit(row);
  }
}
