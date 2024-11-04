import { TestBed } from '@angular/core/testing';

import { PartFilterService } from './part-filter.service';

describe('PartFilterService', () => {
  let service: PartFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
