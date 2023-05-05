import { TestBed } from '@angular/core/testing';

import { EditTournamentService } from './edit-tournament.service';

describe('EditTournamentService', () => {
  let service: EditTournamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTournamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
