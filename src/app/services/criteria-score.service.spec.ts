import { TestBed } from '@angular/core/testing';

import { CriteriaScoreService } from './criteria-score.service';

describe('CriteriaScoreService', () => {
  let service: CriteriaScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriteriaScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
