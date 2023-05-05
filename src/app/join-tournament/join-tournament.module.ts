import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinTournamentRoutingModule } from './join-tournament-routing.module';
import { JoinTournamentComponent } from './join-tournament.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [JoinTournamentComponent],
  imports: [
    CommonModule,
    JoinTournamentRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class JoinTournamentModule {}
