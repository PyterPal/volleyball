import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Tournament } from '../model/tournament';
import { TournamentWithId } from '../model/tournament-with-id';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  constructor(private db: AngularFirestore) {}

  add(tournament: Tournament): Promise<any> {
    return this.db.collection<Tournament>('tournaments').add(tournament);
  }

  delete(docId: string): Promise<void> {
    return this.db.collection<Tournament>('tournaments').doc(docId).delete();
  }

  update(docId: string, tournament: Tournament): Promise<void> {
    return this.db.collection('tournaments').doc(docId).update(tournament);
  }

  getByEmail(email: string): Observable<TournamentWithId[]> {
    return this.db
      .collection<Tournament>('tournaments', (ref) =>
        ref.where('organizer', '==', email)
      )
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.map((change) => {
            return {
              id: change.payload.doc.id,
              tournament: change.payload.doc.data(),
            };
          });
        })
      );
  }

  getUpcoming(): Observable<TournamentWithId[]> {
    return this.db
      .collection<Tournament>('tournaments', (ref) => {
        return ref.orderBy('date', 'asc').limit(1);
      })
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.map((change) => {
            return {
              id: change.payload.doc.id,
              tournament: change.payload.doc.data(),
            };
          });
        })
      );
  }

  getAll(): Observable<TournamentWithId[]> {
    return this.db
      .collection<Tournament>('tournaments')
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.map((change) => {
            return {
              id: change.payload.doc.id,
              tournament: change.payload.doc.data(),
            };
          });
        })
      );
  }
}
