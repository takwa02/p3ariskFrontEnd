import { TestBed } from '@angular/core/testing';

import { TempSelectScoreService } from './temp-select-score.service';

describe('TempSelectScoreService', () => {
  let service: TempSelectScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempSelectScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
