import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      map((loggedIn) => {
        return loggedIn ? false : true;
      })
    );
  }
}
