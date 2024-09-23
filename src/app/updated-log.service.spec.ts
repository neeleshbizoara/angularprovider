import { TestBed } from '@angular/core/testing';

import { UpdatedLogService } from './updated-log.service';

describe('UpdatedLogService', () => {
  let service: UpdatedLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatedLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
