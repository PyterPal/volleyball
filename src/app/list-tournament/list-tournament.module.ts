import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { toDate } from '../pipes/date.pipe';
import { ListTournamentComponent } from './list-tournament.component';

@NgModule({
  declarations: [ListTournamentComponent, toDate],
  imports: [CommonModule, MatTableModule],
  exports: [ListTournamentComponent],
})
export class ListTournamentModule {}
