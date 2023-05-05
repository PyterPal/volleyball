import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  {
    path: 'bejelentkezes',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'regisztracio',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'uj-bajnoksag',
    loadChildren: () =>
      import('./join-tournament/join-tournament.module').then(
        (m) => m.JoinTournamentModule
      ),
    canActivate: [GuestGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./tournament/tournament.module').then((m) => m.TournamentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
