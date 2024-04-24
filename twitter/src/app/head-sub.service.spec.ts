import { TestBed } from '@angular/core/testing';

import { HeadSubService } from './head-sub.service';

describe('HeadSubService', () => {
  let service: HeadSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
