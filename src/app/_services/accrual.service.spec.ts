import { TestBed } from '@angular/core/testing';

import { AccrualService } from './accrual.service';

describe('AccrualService', () => {
  let service: AccrualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccrualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
