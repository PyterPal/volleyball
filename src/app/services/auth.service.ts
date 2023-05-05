import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  register(email: any, password: any): Promise<any> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: any, password: any): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.auth.signOut();
  }

  currentUserEmail(): Promise<string | null> {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user.email);
        } else {
          resolve(null);
        }
      });
    });
  }

  isLoggedIn(): Observable<boolean> {
    return new Observable((observer) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          observer.next(true);
        } else {
          observer.next(false);
        }
      });
    });
  }
}
