import { TestBed } from '@angular/core/testing';

import { TpcategoryService } from './tpcategory.service';

describe('TpcategoryService', () => {
  let service: TpcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
