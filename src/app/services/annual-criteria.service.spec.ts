import { TestBed } from '@angular/core/testing';

import { AnnualCriteriaService } from './annual-criteria.service';

describe('AnnualCriteriaService', () => {
  let service: AnnualCriteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnualCriteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
